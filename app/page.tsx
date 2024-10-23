"use client"; 


import { Button, Card, CardBody, CardFooter, Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { AcmeLogo } from "./components/AcmeLogo";

export default function App() {
  const list = [
    { title: "Apple", img: 'https://media.istockphoto.com/id/184276818/es/foto/manzana-red.jpg?s=612x612&w=0&k=20&c=BFD8ixD7eyXMm3aSVIdz1hUsLG-lX8Ig2HBr6IVJuzU=', price: "$5.50" },
    { title: "Tangerine", img: 'https://as1.ftcdn.net/v2/jpg/00/29/69/78/1000_F_29697857_Rh1QHZRduOv5u8KclCX0cGTPpkVPbtFt.jpg', price: "$3.00" },
    { title: "Raspberry", img: 'https://t4.ftcdn.net/jpg/00/65/04/05/360_F_65040523_aMfTetniXbpT07vIoXFRKZNDZdpxxKrN.jpg', price: "$10.00" },
    { title: "Lemon", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lemon.jpg/800px-Lemon.jpg', price: "$5.30" },
    { title: "Avocado", img: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Avocado_open.jpg', price: "$15.70" },
    { title: "Lemon 2", img: 'https://st.depositphotos.com/1020804/2370/i/450/depositphotos_23707225-stock-photo-lemons-with-leaves.jpg', price: "$8.00" },
    { title: "Banana", img: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg', price: "$7.50" },
    { title: "Watermelon", img: 'https://img.freepik.com/premium-photo/watermelon-fruit-white-background_255512-1061.jpg', price: "$12.20" }
  ];

  return (
    <div className="flex flex-col w-full shadow-md">
      <Navbar position="static" className="w-full">
        <NavbarBrand className="flex items-center">
          <AcmeLogo />
          <p className="font-bold text-inherit ml-2">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-8 justify-center flex-grow">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="flex items-center justify-end flex-grow">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="grid gap-8 grid-cols-2 sm:grid-cols-4 p-4">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="object-cover h-[400px] w-full"
                src={item.img} 
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

