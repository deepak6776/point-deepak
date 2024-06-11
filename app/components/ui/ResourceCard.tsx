import { Flex, Heading, Text} from "@chakra-ui/react";
import Image from "next/image";
import styles from './resource.module.css'
import Link from "next/link";

type Resource = {
  src: string | "",
  heading: string,
  text:string | undefined,
  link: string
}

export default function ResourceCard({src, heading, text, link}:Resource) {
  return (
    <Link href={`/categories/${link}`}>
      <Flex direction="column" className={styles.card}>
        <Image src={src} width={56} height={56} alt='svg illustration' />
        <Heading as='h3' mt='30px'>{heading}</Heading>
        <Text>{text}</Text>
      </Flex>
    </Link>
  )
}
