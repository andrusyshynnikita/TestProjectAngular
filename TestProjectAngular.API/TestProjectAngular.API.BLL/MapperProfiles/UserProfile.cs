using AutoMapper;
using TestProjectAngular.API.Common.DBModels;
using TestProjectAngular.API.Common.ViewModels;

namespace TestProjectAngular.API.BLL.MapperProfiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<UserDBModel, TwitterUserViewModel>()
                .ForMember(m => m.DisplayName, vm => vm.MapFrom(model => model.Name))
                .ForMember(m => m.Email, vm => vm.MapFrom(model => model.Email))
                .ForMember(m => m.PhoneNumber, vm => vm.MapFrom(model => model.PhoneNumber))
                .ForMember(m => m.PhotoURL, vm => vm.MapFrom(model => model.PhotoURL))
                .ForMember(m => m.ProviderId, vm => vm.Ignore())
                .ForMember(m => m.Uid, vm => vm.MapFrom(model => model.TwitterId));

            CreateMap<TwitterUserViewModel, UserDBModel>()
                .ForMember(m => m.Name, vm => vm.MapFrom(model => model.DisplayName))
                .ForMember(m => m.Email, vm => vm.MapFrom(model => model.Email))
                .ForMember(m => m.PhoneNumber, vm => vm.MapFrom(model => model.PhoneNumber))
                .ForMember(m => m.PhotoURL, vm => vm.MapFrom(model => model.PhotoURL))
                .ForMember(m => m.TwitterId, vm => vm.MapFrom(model => model.Uid))
                .ForMember(m => m.Id, vm => vm.Ignore())
                .ForAllOtherMembers(m => m.Ignore());

            CreateMap<UserDBModel, UserAuthorizedViewModel>()
                .ForMember(m => m.Name, vm => vm.MapFrom(model => model.Name))
                .ForMember(m => m.Email, vm => vm.MapFrom(model => model.Email))
                .ForMember(m => m.PhoneNumber, vm => vm.MapFrom(model => model.PhoneNumber))
                .ForMember(m => m.PhotoURL, vm => vm.MapFrom(model => model.PhotoURL))
                .ForMember(m => m.Id, vm => vm.MapFrom(model => model.Id))
                .ForMember(m => m.RefreshToken, vm => vm.MapFrom(model => model.RefreshToken))
                .ForAllOtherMembers(m => m.Ignore());
        }
    }
}
