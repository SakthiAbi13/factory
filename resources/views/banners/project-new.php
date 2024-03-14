<?php
$id = isset($_REQUEST['id'])?$_REQUEST['id']:NULL;


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
//var_dump($result);






?>
<?php $var="contact" ?>
<!doctype html>
<html class="no-js" lang="en">

<head>
    <?php include("includes/head.php"); ?>
</head>

<body>

    <!-- Body main wrapper start -->
    <div class="wrapper">
        <?php include("includes/header.php"); ?>

    <div class="site-main ptb-90">
        <section class="ttm-row project-single-section clearfix">
            <div class="container"  id="project_container">
                <!-- row -->
                <!-- <div class="row">
                    <div class="col-lg-12">
                        <div class="ttm-pf-single-content-wrapper ttm-pf-view-left-image">
                            <div class="ttm-pf-single-content-wrapper-innerbox">
                                <div class="row">
                                    <div class="col-md-12 col-lg-7 col-xl-8">
                                        < !-- ttm_pf_image-wrapper -- >
                                        <div class="ttm_pf_image-wrapper">
                                            <img class="img-fluid" src="http://themetechmount.net/html/vemlo/images/portfolio/portfolio-02-1200x800.jpg"
                                                alt="portfolio-img">
                                        </div>< !-- ttm_pf_image-wrapper end -- >
                                    </div>
                                    <div class="col-md-12 col-lg-5 col-xl-4">
                                        <div class="ttm-pf-single-detail-box">
                                            <ul class="ttm-pf-detailbox-list">
                                                <li>
                                                    <span><i
                                                            class="fa fa-tachometer ttm-textcolor-skincolor"></i>Project</span>
                                                    <span class="ttm-pf-right-details">Refinery Industrial</span>
                                                </li>
                                                <li>
                                                    <span><i
                                                            class="ti ti-panel ttm-textcolor-skincolor"></i>Category</span>
                                                    <span class="ttm-pf-right-details">Banners, Commercial</span>
                                                </li>
                                                <li>
                                                    <span><i
                                                            class="fa fa-user ttm-textcolor-skincolor"></i>Clients</span>
                                                    <span class="ttm-pf-right-details">Alex Sam Martin</span>
                                                </li>
                                                <li>
                                                    <span><i
                                                            class="fa fa-calendar ttm-textcolor-skincolor"></i>Time</span>
                                                    <span class="ttm-pf-right-details">2 Month</span>
                                                </li>
                                                <li>
                                                    <span><i
                                                            class="fa fa-tags ttm-textcolor-skincolor"></i>Status</span>
                                                    <span class="ttm-pf-right-details">Good</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="ttm-pf-single-content-area mt-40">
                                            <div class="pb-15">
                                                <h3>Description</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry. Lorem Ipsum has been the industry’s standard dummy text
                                                    ever since the 1500s, when an unknown printer took a galley of type
                                                    and scrambled it to make a type specimen book. It has survived not
                                                    only five centuries, but also the leap into electronic typesetting,
                                                    remaining essentially unchanged. It was popularised in the 1960s
                                                    with the release of Letraset sheets containing</p>
                                            </div>
                                            <h3>Where Does It Come From?</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry’s standard dummy text ever
                                                since the 1500s, when an unk ultrices tincidunt arcu non sodales neque
                                                sodales lorem donec massa urna nec tincidunt praesent.</p>

                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                </div> -->
            </div>
        </section>


    </div>



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
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="ttm-pf-single-content-wrapper ttm-pf-view-left-image">
                            <div class="ttm-pf-single-content-wrapper-innerbox">
                                <div class="row">
                                    <div class="col-md-12 col-lg-7 col-xl-8">
                                        <!-- ttm_pf_image-wrapper -->
                                        <div class="ttm_pf_image-wrapper">

                                                <img src="${project.image}" alt="">
                                        </div><!-- ttm_pf_image-wrapper end -->
                                    </div>
                                    <div class="col-md-12 col-lg-5 col-xl-4">
                                        <div class="ttm-pf-single-detail-box">
                                            <ul class="ttm-pf-detailbox-list">
                                                <li>
                                                    <span><i
                                                            class="fa fa-tachometer ttm-textcolor-skincolor"></i>Project</span>
                                                    <span class="ttm-pf-right-details">${title}</span>
                                                </li>
                                                <li>
                                                    <span><i
                                                            class="ti ti-panel ttm-textcolor-skincolor"></i>Category</span>
                                                    <span class="ttm-pf-right-details">${type}l</span>
                                                </li>
                                                <li>
                                                    <span><i
                                                            class="fa fa-user ttm-textcolor-skincolor"></i>Club</span>
                                                    <span class="ttm-pf-right-details">${club_name}</span>
                                                </li>
                                                <li>
                                                    <span><i
                                                            class="fa fa-calendar ttm-textcolor-skincolor"></i>Date</span>
                                                    <span class="ttm-pf-right-details">${date}</span>
                                                </li>
                                                <li>
                                                    <span><i
                                                            class="fa fa-tags ttm-textcolor-skincolor"></i>Location</span>
                                                    <span class="ttm-pf-right-details">${location}</span>
                                                </li>
                                                <li>
                                                    <span><i
                                                            class="fa fa-tags ttm-textcolor-skincolor"></i>Chairman</span>
                                                    <span class="ttm-pf-right-details">${project.chairman}</span>
                                                </li>
                                                <li>
                                                    <span><i
                                                            class="fa fa-tags ttm-textcolor-skincolor"></i>Secretary</span>
                                                    <span class="ttm-pf-right-details">${project.secretary}</span>
                                                </li>
                                                <li>
                                                    <span><i
                                                            class="fa fa-tags ttm-textcolor-skincolor"></i>Budget</span>
                                                    <span class="ttm-pf-right-details">${project.budget}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="ttm-pf-single-content-area mt-40">
                                            <div class="pb-15">
                                                <h3>Description</h3>
                                               ${project.description}

                                    </div>

                                </div>


                            </div>

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
