﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using umbraco.providers.members;

namespace SenkoUmbraco.ClassHelper
{
    public class UmbracoRange: RangeAttribute
    {
        public UmbracoRange(int minimum, int maximum, string umbracoDictionaryKey)
            : base(minimum, maximum)
        {
            this.ErrorMessage = UmbracoHelper.GetDictionaryItem(umbracoDictionaryKey);
        }
        
        public UmbracoRange(double minimum, double maximum, string umbracoDictionaryKey)
            : base(minimum, maximum)
        {
            this.ErrorMessage = UmbracoHelper.GetDictionaryItem(umbracoDictionaryKey);
        }

        public IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata, ControllerContext context)
        {
            yield return new ModelClientValidationRule
            {
                ErrorMessage = this.ErrorMessage,
                ValidationType = "range"
            };
        }
    }
}