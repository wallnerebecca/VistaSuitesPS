'use client';

type Props = {
    quote: string;
    author: string;
};

export default function TestimonialCard({ quote, author }: Props) {
    return (
        <figure className="group flex flex-col justify-between h-full p-6 md:p-8 border border-neutral-700 bg-transparent transition-colors duration-200 hover:bg-neutral-100">
            <blockquote className="text-neutral-100/80 text-base md:text-lg leading-relaxed group-hover:text-slate-800">“{quote}”</blockquote>

            <figcaption className="mt-6 text-neutral-100/60 text-sm uppercase tracking-widest group-hover:text-slate-800">— {author}</figcaption>
        </figure>
    );
}
