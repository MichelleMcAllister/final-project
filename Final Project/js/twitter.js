<?php
echo '<pre>';
require_once('TwitterAPIExchange.php');
/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "305906944-qXwFlYNUkLZG055Il3xD1wttqKl5ntgB4KitM4KM",
    'oauth_access_token_secret' => "8JjJimaz2DuB662xHISUc2rh98fWUmxpI2QG1bIFz1frU",
    'consumer_key' => "z6BFESHHTx6i7FxroVXSHmPSv",
    'consumer_secret' => "UQsmffVIvuj0VM5aCDtTvuKRobnBdBiGIRhxD7dph3V8CaDX8f"
);
$url = "https://api.twitter.com/1.1/statuses/user_timeline.json";
$requestMethod = "GET";
$user = "rootcss";
$count = 1;

if (isset($_GET['user'])) { $user = $_GET['user']; }
if (isset($_GET['count'])) { $count = $_GET['count'];}

$getfield = "?screen_name=$user&count=$count";
$twitter = new TwitterAPIExchange($settings);
$string = json_decode($twitter->setGetfield($getfield)->buildOauth($url, $requestMethod)->performRequest(),$assoc = TRUE);

if(isset($string["errors"][0]["message"])) {
    echo "<h3>Sorry, there was a problem.</h3><p>Twitter returned the following error message:</p><p><em>".$string[errors][0]["message"]."</em></p>";
    exit();
}
foreach($string as $items)
    {
        echo "Time and Date of Tweet: ".$items['created_at']."<br />";
        echo "Tweet: ". $items['text']."<br />";
        echo "Tweeted by: ". $items['user']['name']."<br />";
        echo "Screen name: ". $items['user']['screen_name']."<br />";
        echo "Followers: ". $items['user']['followers_count']."<br />";
        echo "Friends: ". $items['user']['friends_count']."<br />";
        echo "Listed: ". $items['user']['listed_count']."<br /><hr />";
    }

echo '</pre>';
?>
