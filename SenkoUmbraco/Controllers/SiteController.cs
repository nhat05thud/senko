using System;
using System.Net.Mail;
using System.Web.Configuration;
using System.Web.Mvc;
using SenkoUmbraco.Models;
using Umbraco.Web.Mvc;

namespace SenkoUmbraco.Controllers
{
    public class SiteController : SurfaceController
    {
        public ActionResult RenderContactForm()
        {
            return PartialView("/Views/Partials/Contact/_ContactForm.cshtml", new SendMailViewModel());
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult HandleContactForm(SendMailViewModel model)
        {
            //Check if the dat posted is valid (All required's & email set in email field)
            if (!ModelState.IsValid)
            {
                //Not valid - so lets return the user back to the view with the data they entered still prepopulated
                return CurrentUmbracoPage();
            }
            string EmailReceive = WebConfigurationManager.AppSettings["EmailContactReceive"];
            string messageString = "<h3>TÂN TIẾN SENKO LIÊN HỆ</h3>";
            messageString += "<b>Họ Tên: </b>" + model.Name + "<br />";
            messageString += "<b>Email: </b>" + model.Email + "<br />";
            messageString += "<b>Điện thoại: </b>" + model.Phone + "<br />";
            messageString += "<b>Nội dung tin nhắn: </b>" + model.Message;

            //Generate an email message object to send
            MailMessage email = new MailMessage(model.Email, EmailReceive);
            email.Subject = "CONTACT FORM SENKO";
            email.Body = messageString;
            email.IsBodyHtml = true;
            try
            {
                //Connect to SMTP credentials set in web.config
                SmtpClient smtp = new SmtpClient();

                //Try & send the email with the SMTP settings
                smtp.Send(email);
            }
            catch (Exception ex)
            {
                //Throw an exception if there is a problem sending the email
                throw ex;
            }

            //Update success flag (in a TempData key)
            TempData["IsSuccessful"] = true;

            //All done - lets redirect to the current page & show our thanks/success message
            return RedirectToCurrentUmbracoPage();
        }
    }
}