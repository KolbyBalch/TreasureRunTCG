import Link from 'next/link';
import { getNetlifyContext } from 'utils';

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1 className="mb-4">Treasure Run</h1>
                <p className="mb-6 text-lg">A dungeon building Trading Card Game</p>
                <Link href="/How-to-Play" className="btn btn-lg sm:min-w-64">
                    How to Play
                </Link>
            </section>
        </div>
    );
}
