import { motion } from "framer-motion";
import { Instagram, Linkedin, Github, Twitter, Disc } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        // REDUCED HEIGHT: Changed pt-16 to pt-10 and pb-8 to pb-6
        <footer id="contact" className="bg-[#020617] border-t border-white/10 pt-10 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    
                    {/* Left Column: Logo & Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center space-y-4"
                    >
                        {/* Large Centered Logo */}
                        <div className="w-28 h-28 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 shadow-lg hover:border-primary/30 transition-colors duration-300">
                            <img 
                                src="/wlug-logo2.png" 
                                alt="WLUG Logo" 
                                className="w-full h-full object-contain rounded-lg" 
                            />
                        </div>

                        {/* Text Below Logo */}
                        <div className="space-y-2">
                            {/* <h3 className="text-xl font-display font-bold text-white tracking-wider">WLUG ARCHITECTS</h3> */}
                            <div className="text-sm font-mono text-muted-foreground/80 space-y-1">
                                <p className="text-primary/80 font-bold tracking-widest uppercase">
                                    COMMUNITY | KNOWLEDGE | SHARE
                                </p>
                                <p className="text-xs opacity-60">Empowering the open source future.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Center Column: Socials */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-center space-y-6 pt-4"
                    >
                        <h3 className="text-xl font-display font-bold text-white">Stay Tuned!</h3>

                        <div className="flex justify-center gap-4">
                            {[
                                { icon: Instagram, href: "https://www.instagram.com/wcewlug?igsh=MXdya2IyNDBtbnBnbw==" },
                                { icon: Linkedin, href: "https://www.linkedin.com/company/wlug-club/" },
                                { icon: Github, href: "https://github.com/Walchand-Linux-Users-Group" },
                                { icon: Twitter, href: "https://mobile.twitter.com/wcewlug" },
                                { icon: Disc, href: "https://discord.gg/FGcEpYuC" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300 transform hover:scale-110"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>

                        <div className="text-xs font-mono text-muted-foreground pt-2">
                            © {currentYear} WCE WLUG, ALL RIGHTS RESERVED
                        </div>
                    </motion.div>

                    {/* Right Column: Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row justify-center md:justify-end gap-12 md:gap-16 pt-4"
                    >
                        {/* MENU SECTION - LEFT ALIGNED */}
                        <div className="space-y-3 text-center md:text-left">
                            <h4 className="text-xs font-mono text-primary/60 mb-2 tracking-wider">[ MENU ]</h4>
                            <a href="#" className="block text-sm font-mono text-muted-foreground hover:text-primary transition-colors">Home</a>
                            <button className="block w-full text-sm font-mono text-muted-foreground hover:text-primary transition-colors text-center md:text-left">Register</button>
                            <a href="#" className="block text-sm font-mono text-muted-foreground hover:text-primary transition-colors">About Us</a>
                        </div>
                        
                        {/* LEGAL SECTION - LEFT ALIGNED */}
                        <div className="space-y-3 text-center md:text-left">
                            <h4 className="text-xs font-mono text-primary/60 mb-2 tracking-wider">[ LEGAL ]</h4>
                            <a href="#" className="block text-sm font-mono text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                            <a href="#" className="block text-sm font-mono text-muted-foreground hover:text-primary transition-colors">Terms</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;