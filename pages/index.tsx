import Main from '@/components/Main/Main'
import Slider from '@/components/Slider/Slider'
import Head from 'next/head'
import Header from '../components/Header/Header'

export default function Home() {
	return (
		<>
			<Head>
				<title>Hype Fighting</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link
					rel='icon'
					href='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fpost%2FUgkxZsjG84Pj0Wxp4luU6Qys_RGtN2b4jTXI&psig=AOvVaw1SQBKe7uvGPYGTE_K48sCX&ust=1674461361616000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIj_jtfb2vwCFQAAAAAdAAAAABAE'
				/>
			</Head>
			<main>
				<Header />
				<Slider />
				<Main />
			</main>
		</>
	)
}
