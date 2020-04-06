namespace Papers
{
    using System;
    using System.IO;
    using System.Linq;
    using System.Reflection;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.SpaServices.AngularCli;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using Microsoft.EntityFrameworkCore;

    using Papers.Data;
    using Papers.Hubs;
    using Papers.Services;

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSignalR();

            services.AddDbContext<PapersDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
            });

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "PapersClient/dist";
            });

            services.AddControllers();

            var definedTypes = Assembly.GetExecutingAssembly().DefinedTypes;
            var serviceInterfaces = definedTypes
                .Where(c => c.IsInterface && c.ImplementedInterfaces.Contains(typeof(IService))).ToList();

            foreach (var serviceInterface in serviceInterfaces)
            {
                var concreteType = definedTypes.FirstOrDefault(c => c.IsClass && c.Name == serviceInterfaces.FirstOrDefault().Name.Substring(1));
                services.AddSingleton(serviceInterface, concreteType);
            }

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env,  PapersDbContext dbContext)
        {
            dbContext.Database.EnsureDeleted();
            dbContext.Database.Migrate();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            // configuration for Angular client
            app.UseCors("CorsPolicy");

            app.UseSpaStaticFiles();

            app.UseEndpoints(endpoints => {
                endpoints.MapControllers();
                endpoints.MapHub<PlaygroundHub>("/playground");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = Path.Join(env.ContentRootPath, "PapersClient");

                if (env.IsDevelopment())
                {
                    spa.Options.StartupTimeout = new TimeSpan(0,1,90);
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}