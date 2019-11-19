import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";

class Single_blog extends Component {
	render() {
		
		return (
		<div>
			
			<Header/>
			
			<section class="blog-landing">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
						   <div class="blog-img">
							  <img src="images/villa.jpg"/>
						   </div>
						</div>
					</div>
				</div>
			</section>
			<section class="singal-blog-content">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="post-contant">	
							<h3 class="title">Blog title will be placed here for blog details</h3>
							<span class="post-date">By Colby Gilbert on November 2nd, 2019</span>
							<hr/>
							<p>Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it
									rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is
									wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real
									thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our
									layouts and designs to be filled with real words, with thoughts that count, information that has
									value. The toppings you may chose for that TV dinner pizza slice when you forgot to shop for
									foods, the paint you may slap on your face to impress the new boss is your business. But what
									about your daily bread? Design comps, layouts, wireframes—will your clients accept that you go
									about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem
									Ipsum is that huge, huge no no to forswear forever. Not so fast, I'd say, there are some
									redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem
									to take into consideration. </p>
									<p>You begin with a text, you sculpt information, you chisel away what's not needed, you come to the point, make things clear, add value, you're a content person, you like words. Design is no
									afterthought, far from it, but it comes in a deserved second. Anyway, you still use Lorem Ipsum and rightly so, as it will always have a place in the web workers toolbox, as things happen, not </p>
               
								   <ul class="single-post-link">
									  <li><a href="#">Home</a></li>
									  <li><a href="#">House</a></li>
									  <li><a href="#">Vacation</a></li>
								   </ul>
								</div>
							</div>
						</div>
					</div>
				
			</section>

			<section class="Related-Posts">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="Popular-title">
								<h3>Related Posts</h3>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card custom-card">
								<div class="card-img-top">
									 <img src="images/villa.jpg"/>
								</div>
								<div class="card-body">
									<div class="c-title ">
									   <h4 class="po-ttle">Blog title will be placed here for
										   blog details informations</h4>
									   <p>It is a long established fact that a reader will be
										   distracted by the readable content of a page
										   when looking at its layout...</p>
									</div>
									<div class="c-footer">
									   <a href="#">Read More</a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card custom-card">
								<div class="card-img-top">
									<img src="images/villa.jpg"/>
								</div>	
								<div class="card-body">
									<div class="c-title ">
										<h4 class="po-ttle">Blog title will be placed here for
                                          blog details informations</h4>
										<p>It is a long established fact that a reader will be
                                          distracted by the readable content of a page
                                          when looking at its layout...</p>
                                    </div>
									<div class="c-footer">
										<a href="#">Read More</a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card custom-card">
								<div class="card-img-top">
									<img src="images/villa.jpg"/>
								</div>
								<div class="card-body">
									<div class="c-title ">
										<h4 class="po-ttle">Blog title will be placed here for
											  blog details informations</h4>
										  <p>It is a long established fact that a reader will be
											  distracted by the readable content of a page
											  when looking at its layout...</p>
										   </div>
									<div class="c-footer">
									   <a href="#">Read More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="coment">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="Popular-title">
								  <h3>Comments</h3>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="coment-card-body">
							<div class="row">
								<div class="col-md-2">
									<img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid cu-coment-img"/>
								</div>
								<div class="col-md-10">
									<div class="clearfix"></div>
									<p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
									<a class="float-left" href="#"><strong>Maniruzzaman Akash</strong></a>
									<p class="text-secondary text-left">15 Minutes Ago</p>
									<p>
										<a class="float-right btn btn-outline-primary ml-2"> <i class="fa fa-reply"></i> Reply</a>
									</p>
								</div>
							</div>
							<div class="card card-inner">
								<div class="coment-card-body">
									<div class="card-body">
										<div class="row">
											<div class="col-md-2">
												<img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid cu-coment-img"/>
											</div>
											<div class="col-md-10">
												<div class="clearfix"></div>
												<p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
												<a class="float-left" href="#"><strong>Maniruzzaman Akash</strong></a>
												<p class="text-secondary text-left">15 Minutes Ago</p>
												<p>
													<a class="float-right btn btn-outline-primary ml-2"><i class="fa fa-reply"></i> Reply</a>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr/>
				<div class="custom-coment-form">
					<div class="row">
						<div class="col-md-12">
							<form>
							   <div class="form-group">
								  <textarea row="10" class="form-control" id="Message" placeholder="Message"></textarea>
							   </div>
							</form>
						</div>
						<div class="col-md-6">
							 <form>
								   <div class="form-group">
									  <input type="text" class="form-control" id="name" placeholder="Name"/>
								   </div>
								</form>
						</div>
						<div class="col-md-6">
							 <form>
								   <div class="form-group">
									  <input type="text" class="form-control" id="Email" placeholder="Email"/>
								   </div>
								  </form>
						</div>
						<div class="col-md-12">
							 <button type="submit" class="btn btn-primary">Post Comment</button>
						</div>
					</div>
				</div>
			</section>
			
			<Footer/>
			
		</div>
		);
	}
}

export default Single_blog;
