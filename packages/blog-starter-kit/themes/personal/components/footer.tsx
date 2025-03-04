import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="border-t bg-blue-300 pt-10 font-mono text-sm text-white dark:border-neutral-800 dark:text-neutral-400">
			&copy; {new Date().getFullYear()} {publication.title}
		</footer>
	);
};
