import Container from "./Container"


const Footer = () => {
  return (
    <footer id="footer" className=" bg-white mt-10 pt-6">
        <div className=" flex justify-around flex-col lg:flex-row">
            <section className="capitalize ">
                <Container classname={' gap-10 flex flex-col md:flex-row md:justify-around md:gap-0 lg:justify-start lg:gap-10'}>
                    <div>
                        <h4 className="font-semibold text-xl mb-4">documents</h4>
                        <nav className="flex-col flex gap-y-3 text-lg">
                            <a href="#">general conditions</a>
                            <a href="#">offers archive</a>
                            <a href="#">series</a>
                            <a href="#">testimony</a>
                        </nav>
                    </div>


                    <div>
                        <h4 className="font-semibold text-xl mb-4">service</h4>
                        <nav className="flex-col flex gap-y-3 text-lg">
                            <a href="#">shops</a>
                            <a href="#">about us</a>
                            <a href="#">for cooperation</a>
                            <a href="#">repetition</a>
                            <a href="#">promo codes</a>
                        </nav>
                    </div>

                    <div>
                        <h4 className="font-semibold text-xl mb-4">product catalog</h4>
                        <ul className="flex-col flex gap-y-3 text-lg">
                            <li><p>catalog 1</p></li>
                            <li><p>catalog 2</p></li>
                            <li><p>catalog 3</p></li>
                            <li><p>catalog 4</p></li>
                            <li><p>catalog 5</p></li>
                        </ul>
                    </div>

                </Container>


            </section>

            <section className="md:flex md:justify-center lg:justify-start ">
                <Container classname={'flex-col gap-y-4 flex md:text-center lg:text-start'}>

                        <h4 className="font-semibold text-xl capitalize">information service</h4>

                        <address className="flex-col flex gap-y-3 text-lg">
                            <a href="mailto:chimaobi01@gmailcom">chimaobi01@gmail.com</a>
                            <span>
                                <a href="tel:+2349039561136">+234 703 956 1136</a>
                                <br />
                                <a href="tel:+2348139603633">+234 813 960 3633</a>
                            </span>
                            <span>Sagbon 186, Almazor district, Tashkent, Uzbekistan</span>
                        </address>

                        <ul className="flex gap-10 items-center justify-center md:justify-start py-6  ">
                            <li><img src="/assets/socials/fb.png" alt="facebook" /></li>
                            <li><img src="/assets/socials/instagram.png" alt="instagram" /></li>
                            <li><img src="/assets/socials/telegram.png" alt="telegram" /></li>
                            <li><img src="/assets/socials/tiktok.png" alt="tiktok" /></li>
                        </ul>

                </Container>
            </section>
        </div>

        <div className="mx-6 p-5 items-center justify-center lg:justify-between flex border-t-2 border-indigo-500">
            <p>2024 nextstore.com</p>
            <p className="hidden lg:block">powered by chimaobiDev</p>
        </div>
    </footer>
  )
}

export default Footer