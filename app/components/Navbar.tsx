import Link from "next/link";
import {NavbarLinks} from "@/app/components/NavbarLink";
import {Button} from "@/components/ui/button";
import {MobileMenu} from "@/app/components/MobileMenu";
import {LoginLink, RegisterLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {UserNav} from "@/app/components/UserNav";

export async function Navbar() {

    const {getUser} = getKindeServerSession();

    const user = await getUser();

    return (
        <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
            <div className="md:col-span-3">
                <Link href="/">
                    <h1 className="text-2xl font-semibold">Henalo<span className="text-primary">UI</span></h1>
                </Link>
            </div>
            <NavbarLinks />
            <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
                {user ? (
                    <UserNav />
                ) : (
                    <div className="flex items-center gap-x-2">
                        <Button asChild>
                            <LoginLink>Login</LoginLink>
                        </Button>
                        <Button variant="secondary" asChild>
                            <RegisterLink>Register</RegisterLink>
                        </Button>
                    </div>
                )}

                <div className="md:hidden">
                    <MobileMenu />
                </div>

            </div>
        </nav>
    )
}
