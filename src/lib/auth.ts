
import { NextAuthOptions } from "next-auth";
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import {db} from '@/lib/db'
import  GoogleProviders from 'next-auth/providers/google'

function getGoogleCredentials(){
    const clientId=process.env.GOOGLE_CLIENT_ID
    const clientSecret=process.env.GOOGLE_CLIENT_SECRET


    if(!clientId || clientId.length===0){
        throw new Error("no client id  for google provider set")
    }
    if(!clientSecret || clientSecret.length===0){
        throw new Error("no client secret  for google provider set")
    }


    return {clientId ,clientSecret}
}



export const authOptions:NextAuthOptions={
     adapter:PrismaAdapter(db),
     session:{
        strategy:"jwt"
     },
     pages:{
        signIn:'/login'
     },
     providers:[
        GoogleProviders({
            clientId:getGoogleCredentials().clientId,
            clientSecret:getGoogleCredentials().clientSecret,
        })
    ],
callbacks:{
    async session({token,session}){
        if(token){
            session.user.id=token.id
            session.user.name=token.name
            session.user.email=token.email
            session.user.image=token.picture
        }
        return session
    },
    async jwt({token,user}){
        const dbUser=await db.user.findFirst({
            where:{
                email:token.email,
            },
        })
        if(!dbUser){
            token.id=user!.id
            return token
        }
        return{
            id:dbUser.id,
            name:dbUser.name,
            email:dbUser.email,
            picture:dbUser.image,

        }
    },
    redirect(){
        return '/dashboard'
    }
}



}