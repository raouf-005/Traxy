import React from 'react';
import { Card ,CardFooter,Image,Button } from '@nextui-org/react';

export default function CardService() {
    return (
        <div className="">
            <h3>SOLAR ENERGY</h3>
            <Card className="w-80 h-96">
                <Image src="https://images.unsplash.com/photo-1629315442690-2e3a4b5b6c0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="card" width={200} height={200}/>
                <CardFooter>
                    <Button className="bg-blue-500">Read More</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
