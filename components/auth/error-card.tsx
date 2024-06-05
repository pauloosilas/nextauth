import { Header } from "./header";

import { Card, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./back-button";

export const ErrorCard = () => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label="Ooops! Something went wrong!" />
            </CardHeader>
            <CardFooter>
                <BackButton 
                    label="Back to login"
                    href="/auth/login"
                />
            </CardFooter>
        </Card>
    )
}
