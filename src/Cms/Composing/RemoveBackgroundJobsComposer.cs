using Cms.Extensions;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Infrastructure.BackgroundJobs.Jobs;
using Umbraco.Cms.Infrastructure.BackgroundJobs.Jobs.ServerRegistration;

namespace Cms.Composing;

public class RemoveBackgroundJobsComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
        => builder
            .RemoveBackgroundJob<ContentVersionCleanupJob>()
            .RemoveBackgroundJob<HealthCheckNotifierJob>()
            .RemoveBackgroundJob<InstructionProcessJob>()
            .RemoveBackgroundJob<KeepAliveJob>()
            .RemoveBackgroundJob<ScheduledPublishingJob>()
            .RemoveBackgroundJob<TouchServerJob>();
}
