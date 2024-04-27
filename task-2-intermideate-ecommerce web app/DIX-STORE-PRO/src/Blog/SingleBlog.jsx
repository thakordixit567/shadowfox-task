import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "#",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "#",
    className: "linkedin",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "#",
    className: "instagram",
  },
  {
    iconName: "icofont-pinterest",
    siteLink: "#",
    className: "pinterest",
  },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();

  const result = blog.filter((b) => b.id === Number(id));

  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curpage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h4>{item.title}</h4>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  The objective of financial statements is to
                                  provide information about the financial
                                  position, performance and changes in financial
                                  position of an enterprise that is useful to a
                                  wide range of users in making economic
                                  decisions." Financial statements should be
                                  understandable, relevant, reliable and
                                  comparable. Reported assets, liabilities,
                                  equity, income and expenses are directly
                                  related to an organization's financial
                                  position
                                </p>
                                <blockquote>
                                  <p>
                                    Perhaps no one explains the importance of
                                    budgeting better than publisher William
                                    Feather. A budget is a great tool to tell
                                    you where your money should go. But it’s up
                                    to you to hold yourself accountable.
                                  </p>
                                  <cite>
                                    <a href="#">...Alex Wood</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Although laws differ from country to country,
                                  an audit of the financial statements of a
                                  public company is usually required for
                                  investment, financing, and tax purposes. These
                                  are usually performed by independent
                                  accountants or auditing firms. Results of the
                                  audit are summarized in an audit report that
                                  either provide an unqualified opinion on the
                                  financial statements or qualifications as to
                                  its fairness and accuracy. The audit opinion
                                  on the financial statements is usually
                                  included in the annual report.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  In the United States, especially in the
                                  post-Enron era there has been substantial
                                  concern about the accuracy of financial
                                  statements. Corporate officers—the chief
                                  executive officer (CEO) and chief financial
                                  officer (CFO)—are personally responsible for
                                  fair financial reporting that provides an
                                  accurate sense of the organization to those
                                  reading the report.
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/NvD76VM3lbI?si=ph-15juDty9835Ac"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Although laws differ from country to country,
                                  an audit of the financial statements of a
                                  public company is usually required for
                                  investment, financing, and tax purposes. These
                                  are usually performed by independent
                                  accountants or auditing firms. Results of the
                                  audit are summarized in an audit report that
                                  either provide an unqualified opinion on the
                                  financial statements or qualifications as to
                                  its fairness and accuracy. The audit opinion
                                  on the financial statements is usually
                                  included in the annual report.
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>

                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left"></i> Previous
                            Blog
                          </a>
                          <a href="#" className="title">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. 
                          </a>
                        </div>

                        <div className="right">
                          <a href="#" className="next">Next
                            Blog 
                            <i className="icofont-double-right"></i> 
                          </a>
                          <a href="#" className="title">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. 
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">

              <aside>
                <Tags/>
                <PopularPost/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
