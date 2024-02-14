import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
    const address = params.address;
    
    try {
        const userBalanace = await prisma.tracBalances.findUnique({
            where: {
                address: address
            },
        });

        return NextResponse.json(userBalanace, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
          { message: "Error Verifying Balance" },
          { status: 500 }
        );
    }
};