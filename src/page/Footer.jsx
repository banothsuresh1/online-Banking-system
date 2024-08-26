import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color">
                    Online Banking System
                  </h5>

                  <p>
                    Seamlessly navigate through your financial journey with
                    ease, as you initiate secure transactions, conveniently
                    deposit funds into your accounts, and effortlessly withdraw
                    when needed.
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">About us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="https://www.linkedin.com/in/banothsuresh204/" class="text-color">
                        Linkdin
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/banothsuresh1" class="text-color">
                        Github
                      </a>
                    </li>
                    {/* <li>
                      <a href="#!" class="text-color">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 4
                      </a>
                    </li> */}
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Contact us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="https://t.ly/nTYyM" class="text-color">
                        WhatsApp
                      </a>
                    </li>
                    <li>
                      <a href="tel:+919100875692" class="text-color">
                        Mobile No
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/_surya.__03/" class="text-color">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="mailto:banothsuresh2215@gmail.com" class="text-color">
                        Gmail.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Careers</h5>

                  <ul class="list-unstyled mb-0">
                  <li>
                      <a href="https://www.linkedin.com/in/banothsuresh204/" class="text-color">
                        Linkdin
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/banothsuresh1" class="text-color">
                        Github
                      </a>


                    </li>
                    {/* <li>
                      <a href="#!" class="text-color">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 4
                      </a>
                    </li> */}
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Links</h5>

                  <ul class="list-unstyled mb-0">
                  <li>
                      <a href="https://www.linkedin.com/in/banothsuresh204/" class="text-color">
                        Linkdin
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/banothsuresh1" class="text-color">
                        Github
                      </a>
                    </li>

                    <li>
                      <a href="https://bit.ly/3Mnhx2R" class="text-color">
                        X(Twitter)
                      </a>
                    </li>

                    {/* <li>
                      <a href="#!" class="text-color">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 4
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-color">Login from here</span>
                <Link to="/user/login" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Log in
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center">
            © 2024 Copyright: 
            <a class="text-color-3" href="https://www.linkedin.com/in/banothsuresh204/">
              Banoth Suresh
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
