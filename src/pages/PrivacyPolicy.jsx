import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
    return (
        <div className="bg-spetia-light min-h-screen">
            <SEO
                title="Privacy Policy"
                description="Privacy Policy for Spetia - Learn how we collect, use, and protect your personal information."
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
                            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-spetia-orange-500 to-spetia-orange-400">Policy</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">

                            {/* Website Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold uppercase text-spetia-dark tracking-tight mb-4">
                                    Website Content
                                </h2>
                                <div className="text-gray-600 leading-relaxed space-y-4">
                                    <p>
                                        This website, composed and managed by Spetia, contains information for people interested in Engineering and Supply Chain Services. The entire content of the website has been gathered to the best of our knowledge and belief, and Spetia endeavors to keep it up to date. In particular, we reserve the entire right to update and/or modify and/or remove this data anytime and without any prior notice. Please note that Spetia holds no responsibility for incorrect statements, quotes or descriptions and thereby excludes liability for any losses resulting from such wrong statements, quotes or descriptions.
                                    </p>
                                    <p>
                                        Further, Spetia has every right to bring about legal action on persons who misuse, alter or reproduce the content/information available on the website.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Data Privacy Policy */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold uppercase text-spetia-dark tracking-tight mb-4">
                                    Data Privacy Policy
                                </h2>
                                <div className="text-gray-600 leading-relaxed space-y-4">
                                    <p>
                                        Spetia treats all personal data obtained via internet and our website carefully and confidentially. We are sensitive to the scenario that we would be dealing with data and information of a personal nature. By using this website and providing your personal information, you consent to the terms of our online privacy policy and to our processing of such personal information for the purposes explained in this policy. By registering on the site or by subscribing to a service and providing your contact details (telephone, email), you agree that this action constitutes a consent, for the purposes of the telemarketing laws, to receive information about products and services from Spetia. You hereby consent to our contacting you pursuant to the business relationship established using the information you provide to us.
                                    </p>
                                    <p>
                                        To access certain services or offerings you may be requested for personal information to enable Spetia to contact you from time to time by either email, postal mail or other means; to provide you with the information about the products and services offered by Spetia, special deals and promotions that may possibly be of interest to you; to measure consumer interest in our products and services; to customize the user experience; enforce the legal terms or any subscriber agreement which govern your subscription for services; perform market research; offer you extension of services; or to detect and protect against error, fraud and other criminal activity. While providing such information you accept that Spetia may use personal information about you to improve the site, review the usage of the site, the content and design of the site, improve our promotional efforts, the product offerings and services.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Rights over Intellectual Property */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold uppercase text-spetia-dark tracking-tight mb-4">
                                    Rights over Intellectual Property
                                </h2>
                                <div className="text-gray-600 leading-relaxed space-y-4">
                                    <p>
                                        Intellectual property of Spetia used on the website are protected under applicable laws. As such, they are strictly the property of Spetia and third parties are not allowed to use them until and unless Spetia provides a written approval.
                                    </p>
                                    <p>
                                        Pictures, Photos, Graphic Charts, Texts and Data published on the website which are owned by Spetia may be used/altered/transferred/reproduced only with prior written approval from Spetia.
                                    </p>
                                    <p>
                                        Other product names, logos, brands, and trademarks (whether registered or unregistered) that are featured or referred to within this site are the sole and exclusive property of their respective trademark holders. You are not permitted to use/alter/transfer/reproduce such content. Spetia shall not be liable in any manner for your usage/alteration/transfer/reproduction of such names, logos, brands and other trademarks.
                                    </p>
                                </div>
                            </motion.div>

                            {/* DND Policy */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold uppercase text-spetia-dark tracking-tight mb-4">
                                    DND Policy
                                </h2>
                                <div className="text-gray-600 leading-relaxed">
                                    <p>
                                        If you wish to stop any further sms/email alerts/contacts from our side, all you need to do is to send an email at <a href="mailto:info@spetia.com" className="text-spetia-orange-600 hover:underline">info@spetia.com</a> with your mobile numbers and you will be excluded from the alerts list.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Changes to Privacy Policy */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold uppercase text-spetia-dark tracking-tight mb-4">
                                    Changes to our Privacy Policy
                                </h2>
                                <div className="text-gray-600 leading-relaxed space-y-4">
                                    <p>
                                        Spetia reserves the entire right to modify/amend/remove this privacy statement anytime and without any reason. Nothing contained herein creates or is intended to create a contract/agreement between Spetia and any user visiting the Spetia website or providing identifying information of any kind.
                                    </p>
                                    <p>
                                        This privacy policy is a supplement to our general Terms and Conditions stated on the website.
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

export default PrivacyPolicy;
