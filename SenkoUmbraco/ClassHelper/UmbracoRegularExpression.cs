using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using umbraco.providers.members;

namespace SenkoUmbraco.ClassHelper
{
    public class UmbracoRegularExpression : RegularExpressionAttribute, IClientValidatable
    {
        public UmbracoRegularExpression(string pattern, string umbracoDictionaryKey) : base(pattern)
        {
            this.ErrorMessage = UmbracoHelper.GetDictionaryItem(umbracoDictionaryKey);
        }

        public IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata, ControllerContext context)
        {
            yield return new ModelClientValidationRule
            {
                ErrorMessage = this.ErrorMessage,
                ValidationType = "regularexpression"
            };
        }
    }
}