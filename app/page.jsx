import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1 className="mb-4">Treasure Run</h1>
                <p className="mb-6 text-lg">A dungeon building Trading Card Game</p>
                <Link href="/How-to-Play" className="btn btn-lg w-full mb-4 sm:w-1/4 sm:min-w-64 sm:mr-4">
                    How to Play
                </Link>
                <Link href="/cards" className="btn btn-lg w-full sm:w-1/4 sm:min-w-64">
                    Explore the Alpha Set
                </Link>
            </section>
        </div>
    );
}
