import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (// footer on home page only. looks better non-mono.
		<footer className="border-t bg-blue-300 pt-10 text-sm text-black dark:border-neutral-800 dark:text-neutral-400">
			&copy; {new Date().getFullYear()} {"Sam's Notebook"}
		</footer>
	);
};
