using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Infrastructure.Runtime.RuntimeModeValidators;

namespace Cms.Composing;

public class RuntimeModeValidatorComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
        => builder.RuntimeModeValidators()
            .Remove<UmbracoApplicationUrlValidator>();
}