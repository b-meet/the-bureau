import Image from "next/image";

import CreditLine from "@/components/global/CreditLine";
import hero from "../../assets/images/hero.jpg";

const MainArticle = () => {
	return (
		<section className='flex-1'>
			<header className='text-center py-10 space-y-6 max-w-2xl m-auto'>
				<span className='tag bg-red-500'>Technology</span>
				<h1 className='font-semibold text-3xl'>
					Canada's cyber agency dismantling fake government
					coronavirus pandemic response websites
				</h1>
				<p className='text-slate-700 max-w-[750px]'>
					Canadian intelligence agencies are fighting against attempts
					to exploit the coronavirus pandemic. Subtitle paragraph
					introducing the articie can go here.
				</p>
				<div className='flex justify-center'>
					<CreditLine author={"San Cooper"} />
				</div>
			</header>
			<main>
				<Image
					src={hero}
					alt='banner'
					className='max-h-[500px] object-cover'
				/>
				<section className='my-10 max-w-2xl mx-auto space-y-6'>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Ratione id autem unde! Nisi quo qui sapiente
						molestiae fuga, quia ullam cum, perspiciatis odio
						recusandae, est non vel quod blanditiis nihil? Nisi
						deserunt dolore quidem est esse asperiores dolores eum,
						placeat vitae ipsum, hic aspernatur voluptate magnam
						necessitatibus.
					</p>
					<p>
						Non expedita odio ipsa. Minus veniam eligendi libero
						dolorem tempore sequi laborum reprehenderit cumque nam
						distinctio perspiciatis sunt, ipsam possimus expedita,
						ullam mollitia. Corrupti quidem ratione quia aut alias
						impedit eius.
					</p>
					<p>
						Totam placeat impedit laboriosam culpa. Vero odio dicta,
						delectus laudantium quisquam aspernatur quod. Minima
						similique eos nostrum sunt aliquam maiores ipsam,
						tenetur iure odio hic unde suscipit sapiente,
						perferendis a, eum earum illo labore culpa? Quibusdam
						labore.
					</p>
					<p>
						quaerat consectetur tenetur earum voluptates atque!
						Perspiciatis atque dolor dignissimos. Et hic
						voluptatibus. exercitationem deleniti dolorem nihil
						neque? Aspernatur sint, vero sapiente maiores voluptatum
						molestias optio magnam eius aliquam a quidem natus
						accusamus velit.
					</p>
					<p>
						sed placeat fugit quos, animi necessitatibus! Dolores
						odit quibusdam sit architecto consequatur minus
						distinctio? Molestias tempora veniam exercitationem, cum
						enim animi saepe, velit eveniet, voluptate ipsum dicta
						quis consequatur!
					</p>
					<p>
						quaerat consectetur tenetur earum voluptates atque!
						Perspiciatis atque dolor dignissimos. Et hic
						voluptatibus. exercitationem deleniti dolorem nihil
						neque? Aspernatur sint, vero sapiente maiores voluptatum
						molestias optio magnam eius aliquam a quidem natus
						accusamus velit.
					</p>
					<p>
						sed placeat fugit quos, animi necessitatibus! Dolores
						odit quibusdam sit architecto consequatur minus
						distinctio? Molestias tempora veniam exercitationem, cum
						enim animi saepe, velit eveniet, voluptate ipsum dicta
						quis consequatur!
					</p>
				</section>
			</main>
		</section>
	);
};

export default MainArticle;
