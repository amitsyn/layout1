import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MpIcon from '@mui/icons-material/Mp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Example from '../components/Caurosal'
import Card from '@mui/material/Card';

const Header = () => {
  return (
    <div>
      <div style={{ background: 'white' }}>
        <Box sx={{ flexGrow: 1, color: 'white' }} >
          <AppBar position="static" sx={{ color: 'black' }}>
            <Grid container spacing={3} display='flex'>
              <Grid sm={4} sx={{ marginTop: '50px',color:'black'}} >
                <FacebookIcon sx={{ m: '10px' }}></FacebookIcon>
                <TwitterIcon sx={{ m: '10px' }} /> 
                <InstagramIcon sx={{ m: '10px' }} />
                <PinterestIcon sx={{ m: '10px' }} />
                <MpIcon sx={{ m: '10px' }} />
                <YouTubeIcon sx={{ m: '10px' }} />
              </Grid>
              <Grid sm={4} sx={{ marginTop: '50px' }} >
                <Stack>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://themeger.shop/html/katen/html/images/other/avatar-lg.png"
                    sx={{ width: 50, height: 50 }}
                  />
                  <Typography variant='h4'>Katen</Typography>
                  <Typography variant='h6'>Professional Writer & Personal Blogger</Typography>
                </Stack>
              </Grid>
              <Grid sm={4} sx={{ marginTop: '50px' }}  >
                <Stack display='-webkit-box' sx={{ marginRight: '20px' }}>
                  <SearchIcon sx={{ m: '20px' }} />
                  <DensityMediumIcon sx={{ m: '20px' }} />
                </Stack>
              </Grid>

            </Grid>
          </AppBar>
        </Box>
      </div>
      <div style={{ display: 'flex', marginLeft: '400px' }}>
        <Button style={{ coloe: 'orange' }}>Home</Button>
        <Button >
          Lifestyle
        </Button>
        <Button >
          Inspiration
        </Button>
        <Button >
          Pages
        </Button>
        <Button >
          Contact
        </Button>
      </div>
      
      <Card  sx={{ maxWidth: 345 }} width='250px' heigth='250px'>
      <Example/>
      </Card>
    </div>
  )
}
export default Header

{/* <div aria-live="polite" class="slick-list draggable"><div class="slick-track" role="listbox" style="opacity: 1; width: 4704px; transform: translate3d(-1344px, 0px, 0px);"><div class="post featured-post-md slick-slide slick-cloned" style="width: 312px;" data-slick-index="-4" id="" aria-hidden="true" tabindex="-1">
                <div class="details clearfix">
                    <a href="category.html" class="category-badge" tabindex="-1">Inspiration</a>
                    <h4 class="post-title"><a href="blog-single.html" tabindex="-1">9 Most Awesome Blue Lake With Snow Mountain</a></h4>
                    <ul class="meta list-inline mb-0">
                        <li class="list-inline-item"><a href="#" tabindex="-1">Katen Doe</a></li>
                        <li class="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="blog-single.html" tabindex="-1">
                    <div class="thumb rounded">
                        <div class="inner data-bg-image" data-bg-image="images/posts/featured-md-1.jpg" style="background-image: url(&quot;images/posts/featured-md-1.jpg&quot;);"></div>
                    </div>
                </a>
            </div><div class="post featured-post-md slick-slide slick-cloned" style="width: 312px;" data-slick-index="-3" id="" aria-hidden="true" tabindex="-1">
                <div class="details clearfix">
                    <a href="category.html" class="category-badge" tabindex="-1">Trending</a>
                    <h4 class="post-title"><a href="blog-single.html" tabindex="-1">Open The Gates For Chair By Using These Tips</a></h4>
                    <ul class="meta list-inline mb-0">
                        <li class="list-inline-item"><a href="#" tabindex="-1">Katen Doe</a></li>
                        <li class="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="blog-single.html" tabindex="-1">
                    <div class="thumb rounded">
                        <div class="inner data-bg-image" data-bg-image="images/posts/featured-md-2.jpg" style="background-image: url(&quot;images/posts/featured-md-2.jpg&quot;);"></div>
                    </div>
                </a>
            </div><div class="post featured-post-md slick-slide slick-cloned" style="width: 312px;" data-slick-index="-2" id="" aria-hidden="true" tabindex="-1">
                <div class="details clearfix">
                    <a href="category.html" class="category-badge" tabindex="-1">Politic</a>
                    <h4 class="post-title"><a href="blog-single.html" tabindex="-1">Feel Like A Pro With The Help Of These 7 Tips</a></h4>
                    <ul class="meta list-inline mb-0">
                        <li class="list-inline-item"><a href="#" tabindex="-1">Katen Doe</a></li>
                        <li class="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="blog-single.html" tabindex="-1">
                    <div class="thumb rounded">
                        <div class="inner data-bg-image" data-bg-image="images/posts/featured-md-3.jpg" style="background-image: url(&quot;images/posts/featured-md-3.jpg&quot;);"></div>
                    </div>
                </a>
            </div><div class="post featured-post-md slick-slide slick-cloned" style="width: 312px;" data-slick-index="-1" id="" aria-hidden="true" tabindex="-1">
                <div class="details clearfix">
                    <a href="category.html" class="category-badge" tabindex="-1">Culture</a>
                    <h4 class="post-title"><a href="blog-single.html" tabindex="-1">Your Light Is About To Stop Being Relevant</a></h4>
                    <ul class="meta list-inline mb-0">
                        <li class="list-inline-item"><a href="#" tabindex="-1">Katen Doe</a></li>
                        <li class="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="blog-single.html" tabindex="-1">
                    <div class="thumb rounded">
                        <div class="inner data-bg-image" data-bg-image="images/posts/inspiration-3.jpg" style="background-image: url(&quot;images/posts/inspiration-3.jpg&quot;);"></div>
                    </div>
                </a>
            </div><div class="post featured-post-md slick-slide slick-current slick-active" style="width: 312px;" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide00">
                <div class="details clearfix">
                    <a href="category.html" class="category-badge" tabindex="0">Lifestyle</a>
                    <h4 class="post-title"><a href="blog-single.html" tabindex="0">Important Thing You Need To Know About Swim</a></h4>
                    <ul class="meta list-inline mb-0">
                        <li class="list-inline-item"><a href="#" tabindex="0">Katen Doe</a></li>
                        <li class="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="blog-single.html" tabindex="0">
                    <div class="thumb rounded">
                        <div class="inner data-bg-image" data-bg-image="images/posts/featured-md-4.jpg" style="background-image: url(&quot;images/posts/featured-md-4.jpg&quot;);"></div>
                    </div>
                </a>
            </div><div class="post featured-post-md slick-slide slick-active" style="width: 312px;" data-slick-index="1" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide01">
                <div class="details clearfix">
                    <a href="category.html" class="category-badge" tabindex="0">Fashion</a>
                    <h4 class="post-title"><a href="blog-single.html" tabindex="0">Most Burning Questions About Light Lamp</a></h4>
                    <ul class="meta list-inline mb-0">
                        <li class="list-inline-item"><a href="#" tabindex="0">Katen Doe</a></li>
                        <li class="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="blog-single.html" tabindex="0">
                    <div class="thumb rounded">
                        <div class="inner data-bg-image" data-bg-image="images/posts/inspiration-3.jpg" style="background-image: url(&quot;images/posts/inspiration-3.jpg&quot;);"></div>
                    </div>
                </a>
            </div><div class="post featured-post-md slick-slide slick-active" style="width: 312px;" data-slick-index="2" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide02">
                <div class="details clearfix">
                    <a href="category.html" class="category-badge" tabindex="0">Inspiration</a>
                    <h4 class="post-title"><a href="blog-single.html" tabindex="0">9 Most Awesome Blue Lake With Snow Mountain</a></h4>
                    <ul class="meta list-inline mb-0">
                        <li class="list-inline-item"><a href="#" tabindex="0">Katen Doe</a></li>
                        <li class="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="blog-single.html" tabindex="0">
                    <div class="thumb rounded">
                        <div class="inner data-bg-image" data-bg-image="images/posts/featured-md-1.jpg" style="background-image: url(&quot;images/posts/featured-md-1.jpg&quot;);"></div>
                    </div>
                </a>
            </div><div class="post featured-post-md slick-slide slick-active" style="width: 312px;" data-slick-index="3" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide03">
                <div class="details clearfix">
                    <a href="category.html" class="category-badge" tabindex="0">Trending</a>
                    <h4 class="post-title"><a href="blog-single.html" tabindex="0">Open The Gates For Chair By Using These Tips</a></h4>
                    <ul class="meta list-inline mb-0">
                        <li class="list-inline-item"><a href="#" tabindex="0">Katen Doe</a></li>
                        <li class="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="blog-single.html" tabindex="0">
                    <div class="thumb rounded">
                        <div class="inner data-bg-image" data-bg-image="images/posts/featured-md-2.jpg" style="background-image: url(&quot;images/posts/featured-md-2.jpg&quot;);"></div>
                    </div>
                </a>
            </div><div class="post featured-post-md slick-slide" style="width: 312px;" data-slick-index="4" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide04">
                <div class="details clearfix">
                    <a href="category.html" class="category-badge" tabindex="-1">Politic</a>
                    <h4 class="post-title"><a href="blog-single.html" tabindex="-1">Feel Like A Pro With The Help Of These 7 Tips</a></h4>
                    <ul class="meta list-inline mb-0">
                        <li class="list-inline-item"><a href="#" tabindex="-1">Katen Doe</a></li>
                        <li class="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="blog-single.html" tabindex="-1">
                    <div class="thumb rounded">
                        <div class="inner data-bg-image" data-bg-image="images/posts/featured-md-3.jpg" style="background-image: url(&quot;images/posts/featured-md-3.jpg&quot;);"></div>
                    </div>
                </a>
            </div><div class="post featured-post-md slick-slide" style="width: 312px;" data-slick-index="5" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide05">
                <div class="details clearfix">
                    <a href="category.html" class="category-badge" tabindex="-1">Culture</a>
                    <h4 class="post-title"><a href="blog-single.html" tabindex="-1">Your Light Is About To Stop Being Relevant</a></h4>
                    <ul class="meta list-inline mb-0">
                        <li class="list-inline-item"><a href="#" tabindex="-1">Katen Doe</a></li>
                        <li class="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="blog-single.html" tabindex="-1">
                    <div class="thumb rounded">
                        <div class="inner data-bg-image" data-bg-image="images/posts/inspiration-3.jpg" style="background-image: url(&quot;images/posts/inspiration-3.jpg&quot;);"></div>
                    </div>
                </a>
            </div><div class="post featured-post-md slick-slide slick-cloned" style="width: 312px;" data-slick-index="6" id="" aria-hidden="true" tabindex="-1">
                <div class="details clearfix">
                    <a href="category.html" class="category-badge" tabindex="-1">Lifestyle</a>
                    <h4 class="post-title"><a href="blog-single.html" tabindex="-1">Important Thing You Need To Know About Swim</a></h4>
                    <ul class="meta list-inline mb-0">
                        <li class="list-inline-item"><a href="#" tabindex="-1">Katen Doe</a></li>
                        <li class="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="blog-single.html" tabindex="-1">
                    <div class="thumb rounded">
                        <div class="inner data-bg-image" data-bg-image="images/posts/featured-md-4.jpg" style="background-image: url(&quot;images/posts/featured-md-4.jpg&quot;);"></div>
                    </div>
                </a>
            </div><div class="post featured-post-md slick-slide slick-cloned" style="width: 312px;" data-slick-index="7" id="" aria-hidden="true" tabindex="-1">
                <div class="details clearfix">
                    <a href="category.html" class="category-badge" tabindex="-1">Fashion</a>
                    <h4 class="post-title"><a href="blog-single.html" tabindex="-1">Most Burning Questions About Light Lamp</a></h4>
                    <ul class="meta list-inline mb-0">
                        <li class="list-inline-item"><a href="#" tabindex="-1">Katen Doe</a></li>
                        <li class="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="blog-single.html" tabindex="-1">
                    <div class="thumb rounded">
                        <div class="inner data-bg-image" data-bg-image="images/posts/inspiration-3.jpg" style="background-image: url(&quot;images/posts/inspiration-3.jpg&quot;);"></div>
                    </div>
                </a>
            </div><div class="post featured-post-md slick-slide slick-cloned" style="width: 312px;" data-slick-index="8" id="" aria-hidden="true" tabindex="-1">
                <div class="details clearfix">
                    <a href="category.html" class="category-badge" tabindex="-1">Inspiration</a>
                    <h4 class="post-title"><a href="blog-single.html" tabindex="-1">9 Most Awesome Blue Lake With Snow Mountain</a></h4>
                    <ul class="meta list-inline mb-0">
                        <li class="list-inline-item"><a href="#" tabindex="-1">Katen Doe</a></li>
                        <li class="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="blog-single.html" tabindex="-1">
                    <div class="thumb rounded">
                        <div class="inner data-bg-image" data-bg-image="images/posts/featured-md-1.jpg" style="background-image: url(&quot;images/posts/featured-md-1.jpg&quot;);"></div>
                    </div>
                </a>
            </div><div class="post featured-post-md slick-slide slick-cloned" style="width: 312px;" data-slick-index="9" id="" aria-hidden="true" tabindex="-1">
                <div class="details clearfix">
                    <a href="category.html" class="category-badge" tabindex="-1">Trending</a>
                    <h4 class="post-title"><a href="blog-single.html" tabindex="-1">Open The Gates For Chair By Using These Tips</a></h4>
                    <ul class="meta list-inline mb-0">
                        <li class="list-inline-item"><a href="#" tabindex="-1">Katen Doe</a></li>
                        <li class="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="blog-single.html" tabindex="-1">
                    <div class="thumb rounded">
                        <div class="inner data-bg-image" data-bg-image="images/posts/featured-md-2.jpg" style="background-image: url(&quot;images/posts/featured-md-2.jpg&quot;);"></div>
                    </div>
                </a>
            </div></div></div> */}
