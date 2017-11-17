/*
This is empty on purpose! Your code to build the resume will go here.
 */

/* var bio = {
   "name": "Willford",
   "role":"student",
   "contact_info":"1506676573",
   "pic_url":"none",
   "welcome_message":"Hi, jipsis",
   "skills":"table tennis"
 };

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.welcome_message);
------------------------------------------------------------
work
work 包含一个 jobs 数组。jobs 数组中的每个对象都应该包含 employer、title、location、工作 dates 和 description 字符串。

projects
projects 包含一个 projects 数组。projects 数组中的每个对象都应该包含 title、dates 和 description 字符串以及 images 数组，其中包含项目图片的 URL 字符串。

bio
bio 包含 name、role、welcomeMessage 和 biopic 字符串， contacts 对象以及 skill 字符串的 skills 数组。contacts 对象应包含 mobile 号码、email 地址、 github 用户名、twitter 句柄和 location。twitter 属性是可选的。

education
education 包含一个 schools 数组。schools 数组中的每个对象都包含 name、location、degree、dates 和 url 字符串，以及 major 字符串的 majors 数组。

education 还包含一个 onlineCourses 数组。onlineCourses 数组中的每个对象都应该包含 title、school、dates 和 url 字符串。
*/
var work = {
  jobs = [
    {
      "employer" = "Archor Mind",
      "title" = "Tester",
      "location" = "Wuhan",
      "dates" = "2017-7-17",
      "description" = "Co. in Stock"
    }
  ]
};

var projects = {
  projects = [
    {
      "title" = "Calendar",
      "dates" = "2016-6",
      "discription" = "First project",
      image = [],
    },
    {
      "title" = "School affairs management System",
      "dates" = "2017-5",
      "discription" = "very hasty",
      image = []
    }
  ]
};

var bio = {
  "name": "Willford",
  "role":"student",
  "welcome_message":"Hi, jipsis",
  "pic_url":"none",
  contact_info = {
    "mobile" = "159******46";
    "email" = "159******46@163.com";
    "github" = "Willfordzhan@gmail.com";
    "location" = "Zhejiang, China";
  },
  "skills" = Skills[
    "table tennis","badminton"
  ]
};

var education = {
  schools = [
    {
      "name" = "",
      "location" = "",
      "degree" = "",
      "dates" = "";
      "url" = ""
    }
  ]
};
