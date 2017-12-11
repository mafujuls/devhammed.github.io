<?php
if (isset($_POST['push'])) {
$path = $_POST['path'];
$message = $_POST['message'];
if (isset($_POST['file_url']) && !empty($_POST['file_url'])) {
$file = $_POST['file_url'];
} else {
$file = isset($_FILES['file']) ? $_FILES['file']['tmp_name'] : null;
}
$content = base64_encode(file_get_contents($file));
$repo_url = $_POST['repo_url'];
if (isset($_POST['user']) && !empty($_POST['user'])) {
$user = $_POST['user'];
} else {
$user = 'Horlahcoded';
}
$pass = $_POST['pass'];

$data = json_encode(array(
'message' => $message,
'content' => $content
));

$auth = $user.':'.$pass;
$options = array(
CURLOPT_RETURNTRANSFER => 1,
CURLOPT_HTTPAUTH => CURLAUTH_BASIC,
CURLOPT_USERAGENT => $user,
CURLOPT_USERPWD => $auth,
CURLOPT_CUSTOMREQUEST => "PUT",
CURLOPT_POSTFIELDS => $data
);
$url = 'https://api.github.com/repos/'.$repo_url.'/contents/'.$path;
$ch = curl_init($url);
curl_setopt_array($ch, $options);
echo curl_exec($ch);
curl_close($ch);
}
?>

<form method="POST" enctype="multipart/form-data">
<input name="user" type="text" value="<?php echo $user; ?>" placeholder="Username" />
<input name="pass" type="text" value="<?php echo $pass; ?>" placeholder="Password" />
<input name="repo_url" type="text" placeholder="Repo e.g User/Repo_Name" value="<?php echo $repo_url; ?>" />
<input name="file_url" type="text" placeholder="File to Upload URL" value="" />
<label>-= OR =-</label>
<input name="file" type="file" />
<input name="path" type="text" placeholder="Save File as..." value="" />
<input name="message" type="text" value="Initial commit" />
<input name="push" type="submit" value="Push" />
</form>