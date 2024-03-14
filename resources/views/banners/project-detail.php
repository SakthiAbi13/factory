<?php
$id = $_GET['id'];


define('API_URL','https://rotarydistrict3000.org/admin_rotary/api/v1/project/'.$id);
define('sec_key','₱rój€ct@2023#TV');
define('auth_token',md5(sec_key.'project'.$id));

$data = array();
$data = [
    'auth_token' => auth_token
];

$data = json_encode($data);
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, API_URL);
// curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POST,true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
'Content-Type: application/json'));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
//$result = curl_exec($ch);
//$result = json_decode($result,true);
//$result = $result['data'];






?>

<!doctype html>
<html class="no-js" lang="en">

<head>
    <?php include("includes/head.php"); ?>
</head>

<body>

    <!-- Body main wrapper start -->
    <div class="wrapper">
        <?php include("includes/header.php"); ?>


  <section class="blog-details-area ptb-100">
                <div class="container">
                    <div class="row" id="project_container">
                        <!-- <div class="col-lg-9 col-12">
                            <div class="blog-details-left">
                                <div class="blog-part">
                                    <div class="blog-img">
                                        < !-- <img src="images/blog/1.jpg" alt=""> -- >
										<img src="< ?= $data['image']; ?>" alt="">
                                    </div>
                                    <div class="blog-info">
                                        <div class="blog-meta">
                                            <span>
                                                <i class="zmdi zmdi-male-alt"></i>
                                                Rayed Tayeb
                                            </span>
                                            <span>
                                                <i class="zmdi zmdi-calendar-note"></i>
                                                14 October,2016
                                            </span>
                                            <span>
                                                <a href="#">
                                                    <i class="zmdi zmdi-comment-alt-text"></i>
                                                    2 Comments
                                                </a>
                                            </span>
                                        </div>
                                        <h3>< ?= $data['title'];?></h3>
                                        <p>< ?= $data['description']; ?>  </p>
                                        <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dol in reprehenderit in voluptate velit</blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, s in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta s explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="col-lg-3 col-12">
                            <div class="blog-right-sidebar">

                                <div class="blog-right-sidebar-top mb-60">
                                    <h3 class="leave-comment-text">Recent Posts</h3>
                                    <ul>
                                        <li><a href="#">Designer habits</a></li>
                                        <li><a href="#">Lifestyle: eating healthy</a></li>
                                        <li><a href="#">New project: Web design</a></li>
                                        <li><a href="#">Industrial design</a></li>
                                        <li><a href="#">The retro look</a></li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                     -->
						</div>
                </div>
            </section>


        <?php include("includes/footer.php"); ?>
    </div>
    <?php include("includes/script.php"); ?>

</body>

<script>
         function parseData(data) {
                try {
                    return JSON.parse(data);
                } catch (e) {}

                return data;
                }

    $(document).ready(function(){
        var auth_token = '<?php echo auth_token; ?>';
        var project_container = $('#project_container');
        let data = {

                        'auth_token': auth_token
                    };
            $.ajax({
                url : "<?php echo API_URL; ?>",
                type : 'POST',
                data: JSON.stringify(data),
                success: function(response){
                    var json = parseData(response);
                    var data = json.data;
                    console.log(data);


                    //for focus project
                    for (var i = 0; i < data.length; i++) {
                        var project = data[i];
                        var project_id = project.project_id;
                        var title = project.title;
                        var club_name = project.club_name;
                        var date = project.date;
                        var location = project.location;
                        var type = project.project_type;


                            var project_html = `

                        <div class="col-lg-9 col-12">
                            <div class="blog-details-left">
                                <div class="blog-part">
                                    <div class="blog-img">
                                        <!-- <img src="images/blog/1.jpg" alt=""> -->
										<img src="${project.image}" alt="">
                                    </div>
                                    <div class="blog-info">
                                        <div class="blog-meta">
                                            <span>
                                                <i class="zmdi zmdi-male-alt"></i>
                                                Rayed Tayeb
                                            </span>
                                            <span>
                                                <i class="zmdi zmdi-calendar-note"></i>
                                                14 October,2016
                                            </span>
                                            <span>
                                                <a href="#">
                                                    <i class="zmdi zmdi-comment-alt-text"></i>
                                                    2 Comments
                                                </a>
                                            </span>
                                        </div>
                                        <h3>${title}</h3>
                                        <p>${project.description}  </p>

                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="col-lg-3 col-12">
                            <div class="blog-right-sidebar">

                                <div class="blog-right-sidebar-top mb-60">
                                    <h3 class="leave-comment-text">Recent Posts</h3>
                                    <ul>
                                        <li><a href="#">Designer habits</a></li>
                                        <li><a href="#">Lifestyle: eating healthy</a></li>
                                        <li><a href="#">New project: Web design</a></li>
                                        <li><a href="#">Industrial design</a></li>
                                        <li><a href="#">The retro look</a></li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    `;
                                project_container.append(project_html);
                        }

				//  <blockquote></blockquote><p></p>





                }
            });
        });

</script>

</html>
