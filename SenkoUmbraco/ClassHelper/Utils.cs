using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;

namespace SenkoUmbraco.ClassHelper
{
    public static class Utils
    {
        public static string ConvertImageToBase64(string imagePath)
        {
            using (Image image = Image.FromFile(HttpContext.Current.Server.MapPath("~" + imagePath)))
            {
                using (MemoryStream m = new MemoryStream())
                {
                    image.Save(m, image.RawFormat);
                    byte[] imageBytes = m.ToArray();

                    // Convert byte[] to Base64 String
                    string base64String = Convert.ToBase64String(imageBytes);
                    return base64String;
                }
            }
        }
        public static string StripHtml(string input)
        {
            return Regex.Replace(input, "<.*?>", string.Empty);
        }
        public static string ReplaceUnicodeString(string input)
        {
            string[] specWrd1 = { "é", "é", "è", "ẻ", "ẽ", "ẹ", "ẹ", "ê", "ế", "ề", "ể", "ễ", "ệ" };
            string[] specWrd2 = { "ý", "ỳ", "ỷ", "ỹ", "ỵ" };
            string[] specWrd3 = { "ú", "ù", "ủ", "ũ", "ụ", "ụ", "ư", "ứ", "ừ", "ử", "ữ", "ự" };
            string[] specWrd4 = { "í", "ì", "ỉ", "ĩ", "ị" };
            string[] specWrd5 = { "ó", "ò", "ỏ", "õ", "ọ", "ọ", "ô", "ố", "ồ", "ổ", "ỗ", "ộ", "ơ", "ớ", "ờ", "ở", "ỡ", "ợ" };
            string[] specWrd6 = { "á", "à", "ả", "ã", "à", "ạ", "ạ", "â", "ấ", "ầ", "ẩ", "ẫ", "ậ", "ă", "ắ", "ằ", "ẳ", "ẵ", "ặ" };
            string[] specWrd7 = { "đ" };
            input = input.ToLower();
            foreach (string s in specWrd1)
            {
                if (input.Contains(s))
                {
                    input = input.Replace(s, "e");
                }
            }
            foreach (string s in specWrd2)
            {
                if (input.Contains(s))
                {
                    input = input.Replace(s, "y");
                }
            }
            foreach (string s in specWrd3)
            {
                if (input.Contains(s))
                {
                    input = input.Replace(s, "u");
                }
            }
            foreach (string s in specWrd4)
            {
                if (input.Contains(s))
                {
                    input = input.Replace(s, "i");
                }
            }
            foreach (string s in specWrd5)
            {
                if (input.Contains(s))
                {
                    input = input.Replace(s, "o");
                }
            }
            foreach (string s in specWrd6)
            {
                if (input.Contains(s))
                {
                    input = input.Replace(s, "a");
                }
            }
            foreach (string s in specWrd7)
            {
                if (input.Contains(s))
                {
                    input = input.Replace(s, "d");
                }
            }
            input = Regex.Replace(input, @"\r\n?|\n", "");
            return input;
        }
    }
}