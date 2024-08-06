import { Navbar } from "@/components/Navbar";
import { Container } from "@/components/Container";
import { AddRecordContextProvider } from "@/components/utils/Context";


export default function Home() {
  return (
    <>
      <AddRecordContextProvider>
        <Navbar />
        <Container />
      </AddRecordContextProvider>
    </>
  )
}