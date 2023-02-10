import {useState} from 'react';
import A01Button from './components/atoms/01-button';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='min-h-full'>
			<header className='bg-white dark:bg-gray-700 px-4 py-3 shadow-sm sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
				<div className='min-w-0 flex-1'>
					<h2 className='text-2xl font-bold leading-7 text-gray-900 dark:text-gray-300 sm:truncate sm:text-3xl sm:tracking-tight'>
						Counter
					</h2>
				</div>
				<div className='mt-4 flex gap-3 md:mt-0 md:ml-4'>
					<A01Button onClick={() => {
						setCount(0);
					}}>Reset</A01Button>
					<A01Button primary onClick={() => {
						setCount(count + 1);
					}}>
						Increment
					</A01Button>
				</div>
			</header>
			<main>
				<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div className='px-4 py-8 sm:px-0'>
						<div className='flex h-96 items-center justify-center rounded-lg border-4 border-dashed border-gray-200 dark:border-gray-700 text-4xl text-gray-400'>
							{count}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
