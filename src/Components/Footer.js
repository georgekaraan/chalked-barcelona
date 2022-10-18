import './Footer.css'

const Footer = () => {

    return (
        <>
            <hr></hr>
            <footer>
                <div className="col1">
                    <h3>Chalk us out</h3>
                    <a href="f">Find Us On Facebook</a>
                    <a href="f">Testimonials</a>
                    <a href="f">About</a>
                    <a href="f">Terms Of Service</a>
                    <a href="f">Refund Policy</a>
                </div>

                <div className="col2">
                    <h3>Want even more?</h3>
                    <a href="f">Shipping Info</a>
                    <a href="f">Our locations</a>
                    <a href="f">Get in touch</a>
                </div>
                <div className='col3'>
                    <h3>Search</h3>
                    <input type="search" placeholder="Search product.." id="footer-search" name="footer-search"></input>
                </div>

            </footer>
        </>
    )
}

export default Footer;