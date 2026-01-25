import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const TermsOfUse = () => {
    return (
        <div className="bg-spetia-light min-h-screen">
            <SEO
                title="Terms of Use"
                description="Terms of Use for Spetia website - Please read these terms carefully before using our services."
            />

            {/* Hero Section */}
            <section className="relative bg-spetia-dark pt-32 pb-16">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="h-[2px] w-8 bg-spetia-orange-500"></div>
                            <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase">
                                Legal
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold uppercase text-white leading-tight tracking-tight">
                            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Use</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">

                            {/* Introduction */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <p className="text-gray-600 leading-relaxed">
                                    These Terms of Use of spetia.com ("Website") are between Spetia ("Spetia") and its users. Please read the Terms of Use and the <Link to="/privacy-policy" className="text-spetia-orange-600 hover:underline">Privacy Policy</Link> of the Website carefully before using this Website or availing any services through the Website. Your use of the Website or the services provided by the Website shall signify your acceptance of the Terms of Use and your agreement to be legally bound by the same.
                                </p>
                            </motion.div>

                            {/* A. Eligibility Criteria */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold uppercase text-spetia-dark tracking-tight mb-4">
                                    A. Eligibility Criteria
                                </h2>
                                <div className="text-gray-600 leading-relaxed space-y-4">
                                    <ul className="list-disc pl-6 space-y-3">
                                        <li>The services offered on the Website are not available to all those individuals who are not qualified to enter into a contract as per applicable laws. By using the Website, you represent and warrant that (a) all registration information you submit is truthful and accurate; (b) you will maintain the accuracy of such information, and any changes thereto by regular updates of any such information; (c) you affirm that you are over 18 years of age and are fully able and competent to enter into the terms and as set forth in these Terms of Use.</li>
                                        <li>Spetia reserves the right to grant or refuse usage of the services available on the Website. It can also terminate the usage by an existent user of the Website without assigning any reason.</li>
                                        <li>Spetia does not have the responsibility to ensure that you conform to the aforesaid eligibility criteria. It shall be your sole responsibility to ensure that you meet the required qualification.</li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* B. Use of the Website */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold uppercase text-spetia-dark tracking-tight mb-4">
                                    B. Use of the Website
                                </h2>
                                <div className="text-gray-600 leading-relaxed space-y-4">
                                    <ul className="list-disc pl-6 space-y-3">
                                        <li>Subject to compliance with the Terms of Use, the Privacy Policy, and all other applicable terms and guidelines, Spetia grants you a non-exclusive, limited privilege to access and use this Website and the services provided thereon.</li>
                                        <li>You shall use the Website or such other services provided under the Website only in compliance with these Terms of Use and all applicable local, state, national, and international laws, rules and regulations.</li>
                                        <li>No user shall be permitted to perform any of the following prohibited activities:
                                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                                <li>Making available any content that is misleading, unlawful, harmful, threatening, abusive, defamatory, vulgar, obscene, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable;</li>
                                                <li>Transmitting material that encourages anyone to commit a criminal offence, that results in civil liability or otherwise breaches any relevant laws, regulations or code of practice;</li>
                                                <li>Interfering with any other person's use or enjoyment of the Website;</li>
                                                <li>Making, transmitting or storing electronic copies of materials protected by copyright without the permission of the owner;</li>
                                                <li>Reverse engineer, modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or software obtained from the Website;</li>
                                                <li>Post, transmit or make available any material that contains viruses, trojan horses, worms, spyware, or other computer programming routines that may harm the Website or interests of other users;</li>
                                                <li>Access or use the Website in any manner that could damage, disable, overburden or impair any of the Website's servers;</li>
                                                <li>Use deep-links, page-scrape, robot, spider or other automatic device to access, acquire, copy or monitor any portion of the Website;</li>
                                            </ul>
                                        </li>
                                        <li>Any violation by you of the terms of this Clause shall be considered a breach of these Terms of Use, and Spetia reserves the right to take appropriate legal action.</li>
                                        <li>Spetia reserves the right to change, modify, suspend, or discontinue and/or eliminate any aspect(s), features or functionality of the Website or the services as it deems fit at any time without notice.</li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* C. Indemnification */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold uppercase text-spetia-dark tracking-tight mb-4">
                                    C. Indemnification
                                </h2>
                                <div className="text-gray-600 leading-relaxed">
                                    <p>
                                        You agree to defend, indemnify and hold harmless Spetia, its officers, directors, employees and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the service; (ii) your violation of any term of these Terms of Use; (iii) your violation of any third party right, including without limitation, any copyright, property, or privacy right; (iv) the committing of any of the prohibited activities as stated above under Section B or (v) any claim that your use of the Website caused damage to a third party. This defense and indemnification obligation will survive these Terms of Use of the service.
                                    </p>
                                </div>
                            </motion.div>

                            {/* D. Limitation of Liability */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold uppercase text-spetia-dark tracking-tight mb-4">
                                    D. Limitation of Liability
                                </h2>
                                <div className="text-gray-600 leading-relaxed">
                                    <p>
                                        In no event shall Spetia, its officers, directors, employees, partners or agents be liable to you or any third party for any special, incidental, indirect, consequential or punitive damages whatsoever, including those resulting from loss of use, data or profits, whether or not foreseeable or whether or not Spetia has been advised of the possibility of such damages, or based on any theory of liability, including breach of contract or warranty, negligence or other tortious action, or any other claim arising out, of or in connection with, your use of, or access to, the Website or the services.
                                    </p>
                                </div>
                            </motion.div>

                            {/* E. Governing Law and Jurisdiction */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold uppercase text-spetia-dark tracking-tight mb-4">
                                    E. Governing Law and Jurisdiction
                                </h2>
                                <div className="text-gray-600 leading-relaxed space-y-4">
                                    <ul className="list-disc pl-6 space-y-3">
                                        <li>The Website, the Terms of Use, all transactions entered into on or through the Website and the relationship between you and Spetia shall be governed by and construed in accordance with applicable laws.</li>
                                        <li>You agree that all claims, differences and disputes arising under or in connection with or pursuant to the Website, the Terms of Use, any transactions entered into on or through the Website or the relationship between you and Spetia shall be subject to the exclusive jurisdiction of the competent Courts.</li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* F. General Provisions */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold uppercase text-spetia-dark tracking-tight mb-4">
                                    F. General Provisions
                                </h2>
                                <div className="text-gray-600 leading-relaxed space-y-4">
                                    <ul className="list-disc pl-6 space-y-3">
                                        <li><strong>Notice:</strong> All notices served by Spetia shall be provided via email to your account or as a general notification on the Website. Any notice provided to Spetia pursuant to the Terms of Use should be sent to <a href="mailto:info@spetia.com" className="text-spetia-orange-600 hover:underline">info@spetia.com</a>.</li>
                                        <li><strong>Entire Agreement:</strong> The Terms of Use, along with the Privacy Policy, and any other guidelines made applicable by the Website from time to time, constitute the entire agreement between Spetia and you with respect to your access to or use of the Website and the services thereof.</li>
                                        <li><strong>Relationship:</strong> You acknowledge that your participation in the service does not make you an employee or agency or partnership or joint venture or franchise of Spetia.</li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* G. Feedback */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold uppercase text-spetia-dark tracking-tight mb-4">
                                    G. Feedback
                                </h2>
                                <div className="text-gray-600 leading-relaxed">
                                    <p>
                                        Any feedback you provide to this Website shall be deemed to be non-confidential. Website shall be free to use such information on an unrestricted basis.
                                    </p>
                                </div>
                            </motion.div>

                            {/* H. Disclaimer */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold uppercase text-spetia-dark tracking-tight mb-4">
                                    H. Disclaimer
                                </h2>
                                <div className="text-gray-600 leading-relaxed">
                                    <p>
                                        The materials on this website and all other links and contents are provided "as is" without any express or implied warranty of any kind, including, without limitation, warranties of merchantability, non-infringement of intellectual property rights, or fitness for any particular purpose, all of which are hereby expressly disclaimed. In no event will Spetia or any of its affiliates, vendors, contractors, agents, content providers, officers, directors, investors, employees or partners be liable for any damages whatsoever (including, without limitation, direct damages, incidental damages, consequential damages, special damages, or damages for loss of profits, business interruption, or loss of information) directly or indirectly caused by, arising out of or relating to, the use or inability to use this site, the materials or other links and content, even if Spetia has been advised of the possibility of such damages.
                                    </p>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsOfUse;
