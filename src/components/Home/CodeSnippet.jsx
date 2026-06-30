import { motion } from "framer-motion";

const CodeSnippet = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="glass-card relative overflow-hidden rounded-2xl p-6 md:p-8">
                {/* Window Header */}

                <div className="mb-6 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/60" />

                    <div className="h-3 w-3 rounded-full bg-yellow-500/60" />

                    <div className="h-3 w-3 rounded-full bg-green-500/60" />

                    <span className="ml-3 font-mono text-xs text-text-secondary">
                        codecelix.config.ts
                    </span>
                </div>

                {/* Code */}
                <pre className="overflow-x-auto font-mono text-sm leading-relaxed">
                    <code>
                        <span className="text-violet-500">export</span>

                        <span className="text-white"> </span>

                        <span className="text-violet-500">const</span>

                        <span className="text-white"> </span>

                        <span className="text-accent">config</span>

                        <span className="text-white">{" = {"}</span>

                        {"\n"}

                        <span className="text-white">{"  "}</span>

                        <span className="text-primary-light">performance</span>

                        <span className="text-text-secondary">:</span>

                        <span className="text-green-400">{" 'blazing'"}</span>

                        <span className="text-text-secondary">,</span>

                        {"\n"}

                        <span className="text-white">{"  "}</span>

                        <span className="text-primary-light">security</span>

                        <span className="text-text-secondary">:</span>

                        <span className="text-green-400">
                            {" 'enterprise'"}
                        </span>

                        <span className="text-text-secondary">,</span>

                        {"\n"}

                        <span className="text-white">{"  "}</span>

                        <span className="text-primary-light">scalability</span>

                        <span className="text-text-secondary">:</span>

                        <span className="text-green-400">{" 'infinite'"}</span>

                        <span className="text-text-secondary">,</span>

                        {"\n"}

                        <span className="text-white">{"  "}</span>

                        <span className="text-primary-light">design</span>

                        <span className="text-text-secondary">:</span>

                        <span className="text-green-400">
                            {" 'award-winning'"}
                        </span>

                        <span className="text-text-secondary">,</span>

                        {"\n"}

                        <span className="text-white">{"  "}</span>

                        <span className="text-primary-light">innovation</span>

                        <span className="text-text-secondary">:</span>

                        <span className="text-violet-500">{" true"}</span>

                        <span className="text-text-secondary">,</span>

                        {"\n"}

                        <span className="text-white">{"  "}</span>

                        <span className="text-primary-light">commitment</span>

                        <span className="text-text-secondary">:</span>

                        <span className="text-accent">{" Infinity"}</span>

                        <span className="text-text-secondary">,</span>

                        {"\n"}

                        <span className="text-white">{"}"}</span>

                        <span className="text-text-secondary">;</span>
                    </code>
                </pre>

                {/* Background Glow */}

                <div
                    className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full blur-3xl"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(6,182,212,.15) 0%, transparent 70%)",
                    }}
                />

                <div
                    className="pointer-events-none absolute -top-16 -left-16 h-40 w-40 rounded-full blur-3xl"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(37,99,235,.12) 0%, transparent 70%)",
                    }}
                />
            </div>
        </motion.div>
    );
};

export default CodeSnippet;
