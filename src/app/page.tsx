import Image from 'next/image';
import logo from '../assets/logo.svg'
import woman from '../assets/woman.svg'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default function Home() {
  return (
   <main>
    <section className='mx-auto container text-center pb-20'>
      <nav className='flex justify-between items-center py-4 '>
        <Image src={logo} alt="Logotipo" />
        <div className='flex gap-2'>
          <Button variant={'link'}>Funcionamento</Button>
          <Button variant={'link'}>Preço</Button>
          {/* <Button variant={'bg-white'}>Login</Button> */}
          <Button>Login</Button>
        </div>
      </nav>
      <h1 className='text-6xl font-bold mt-16'>Simplifique Seus Estudos </h1>
      <p className='text-gray-500 mt-7 text-xl max-w-3xl mx-auto'>Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.</p>
      <form className='mt-14 '>
        <div className='flex justify-center gap-2'>
          <Input type="text" placeholder="Coloque seu email" className='max-w-sm bg-white border border-gray-300'/>
          <Button >Assine agora</Button>
        </div>
        <p className='text-xs text-muted-foreground mt-2'>Comece sua assinatura agora mesmo. Cancele quando quiser. </p>
      </form>
    </section>

    <section className='bg-white py-16'>
      <h2 className='text-6xl text-center font-bold'>Como funciona?</h2>
      <div className='flex items-center justify-between container mx-auto max-w-3xl'>
        <Image src={woman} alt='Mulher carregando encomenda'/>
        <ul className='text-2xl text-muted-foreground space-y-6'>
          <li className='flex items-center justify-between'>Acesso a 1 ebook por mês <Check className='text-green-600 ml-5'/></li>
          <li className='flex items-center justify-between'>Curadoria especial <Check className='text-green-600 ml-5'/></li>
          <li className='flex items-center justify-between'>Cancele quando quiser <Check className='text-green-600 ml-5'/></li>
        </ul>
      </div>
    </section>


    <section className='text-center py-20'>
      <h2 className='text-6xl font-bold'>Preço simples e transparente</h2>
      <p className='text-gray-600 text-xl max-w-3xl mx-auto mt-10 mb-10'>Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação. E por menos de um café por dia. </p>

            <Card className='w-[350px] mx-auto text-left'>
        <CardHeader>
          <CardTitle className='mb-2'>Plano Pro Premium VIP</CardTitle>
          <CardDescription>Tudo que você precisa para seus estudos</CardDescription>
        </CardHeader>
        <CardContent>
        <p className='text-4xl font-bold mb-8 mt-4'>R$29<span className='font-normal text-muted-foreground text-lg'>/mês</span></p>
        <ul>
          <li className='flex text-muted-foreground'> <Check className='w-4 text-green-600 mr-1'/>1 ebook por mês</li>
          <li className='flex text-muted-foreground'> <Check className='w-4 text-green-600 mr-1'/>Curadoria especial</li>
          <li className='flex text-muted-foreground'> <Check className='w-4 text-green-600 mr-1'/>Acesso ilimitado</li>
          <li className='flex text-muted-foreground'> <Check className='w-4 text-green-600 mr-1'/>Cancele a qualquer momento</li>
        </ul>
        </CardContent>
        <CardFooter>
        <Button className='mt-4 w-full'>Assine agora</Button>
        </CardFooter>
      </Card>
    </section>


    <section className='bg-white text-center py-20'>
      <h2 className='text-6xl font-bold'>Pronto Para Mudar Sua Vida?</h2>
      <p className='text-gray-600 max-w-2xl text-xl mx-auto mt-5'>Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos </p>
      <Button className='w-[420px] mt-8'>Assine agora</Button>
      <p className='mt-3 text-muted-foreground'>Comece sua assinatura agora mesmo. Cancele quando quiser. </p>

      <footer className='mt-20 text-center border-t border-gray-300 pt-10'>
        <Image src={logo} alt="Logotipo" className='mx-auto' />
        <p className='text-muted-foreground'>© 2025 LivroSaaS. Todos os direitos reservados.</p>
      </footer>
    </section>
   </main>
  );
}
