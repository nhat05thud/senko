using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using umbraco.providers.members;

namespace SenkoUmbraco.ClassHelper
{
    public class UmbracoRequired : RequiredAttribute, IClientValidatable
    {
        private readonly string _umbracoDictionaryKey;
        public UmbracoRequired(string umbracoDictionaryKey)
        {
            _umbracoDictionaryKey = umbracoDictionaryKey;
        }

        public IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata, ControllerContext context)
        {
            yield return new ModelClientValidationRule
            {
                ErrorMessage = UmbracoHelper.GetDictionaryItem(_umbracoDictionaryKey),
                ValidationType = "required"
            };
        }
    }
}