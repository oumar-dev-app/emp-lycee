    import { NextResponse } from "next/server";
    import { NextRequest } from "next/server";
    import Jwt from "jsonwebtoken";

    export const runtime = "nodejs";

    export function middleware(request: NextRequest) {
        const url = request.nextUrl.pathname;

        // Autoriser ces routes sans token
        if (url === "/api/login" || url === "/api/register") {
            return NextResponse.next();
        }

        try {
            // Lire le header Authorization
            const authHeader = request.headers.get('authorization');

            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                return NextResponse.json({ message: 'Non autorisé' }, { status: 401 });
            }

            // Extraire le token
            const token = authHeader.split(" ")[1];

            // Vérifier le token
            Jwt.verify(token, process.env.JWT_SECRET as string);
            console.log("token verifie avec succè !")
            return NextResponse.next();
        } catch (error: any) {
            console.log(error);
            return NextResponse.json({ message: error.message }, { status: 401 });
        }
    }

    export const config = {
        matcher: ["/api/:path*"]
    };