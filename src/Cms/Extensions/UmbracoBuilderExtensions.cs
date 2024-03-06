using Umbraco.Cms.Infrastructure.BackgroundJobs;

namespace Cms.Extensions;

public static class UmbracoBuilderExtensions
{
    public static IUmbracoBuilder RemoveBackgroundJob<T>(this IUmbracoBuilder builder)
        where T : IRecurringBackgroundJob
    {
        var serviceDescriptor = builder
            .Services
            .FirstOrDefault(s => s.ImplementationType == typeof(T));
        if (serviceDescriptor is not null)
        {
            builder.Services.Remove(serviceDescriptor);
        }

        return builder;
    }
}