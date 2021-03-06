"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vg_mute_1 = require("./vg-mute");
var vg_api_1 = require("../../core/services/vg-api");
describe('Mute Button', function () {
    var mute;
    var ref;
    var api;
    beforeEach(function () {
        ref = {
            nativeElement: {
                getAttribute: function (name) {
                    return name;
                }
            }
        };
        api = new vg_api_1.VgAPI();
        api.medias = {
            main: {
                id: 'main',
                volume: 1
            },
            secondary: {
                id: 'secondary',
                volume: 0.5
            }
        };
        mute = new vg_mute_1.VgMute(ref, api);
    });
    it('Should get media by id on init', function () {
        spyOn(api, 'getMediaById').and.callFake(function () {
            return {
                volume: 1
            };
        });
        mute.vgFor = 'test';
        mute.onPlayerReady();
        expect(api.getMediaById).toHaveBeenCalledWith('test');
        expect(mute.currentVolume).toBe(1);
    });
    it('Should get volume for one media file', function () {
        api.medias = {
            main: {
                volume: 1
            }
        };
        mute.target = api;
        var volume = mute.getVolume();
        expect(volume).toBe(1);
    });
    describe('onClick (single media)', function () {
        it('should mute volume if current volume is different than 0', function () {
            api.medias = {
                main: {
                    volume: 0.75
                }
            };
            mute.target = api;
            mute.onClick();
            expect(mute.currentVolume).toBe(0.75);
            expect(api.volume).toEqual(0);
        });
        it('should unmute volume if current volume is 0', function () {
            api.medias = {
                main: {
                    volume: 0
                }
            };
            mute.target = api;
            mute.currentVolume = 0.75;
            mute.onClick();
            expect(api.volume).toEqual(0.75);
        });
    });
    describe('onClick (multiple medias)', function () {
        it('should mute volume if current volume is different than 0', function () {
            mute.target = api;
            mute.onClick();
            expect(mute.currentVolume).toBe(1);
            expect(api.volume).toEqual(0);
        });
        it('should unmute volume if current volume is 0', function () {
            api.medias = {
                main: {
                    id: 'main',
                    volume: 0
                },
                secondary: {
                    id: 'secondary',
                    volume: 0
                }
            };
            mute.target = api;
            mute.currentVolume = 0.75;
            mute.onClick();
            expect(api.volume).toEqual(0.75);
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctbXV0ZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctbXV0ZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlDO0FBQ2pDLHFEQUFpRDtBQUdqRCxRQUFRLENBQUMsYUFBYSxFQUFFO0lBQ3BCLElBQUksSUFBVyxDQUFDO0lBQ2hCLElBQUksR0FBYyxDQUFDO0lBQ25CLElBQUksR0FBUyxDQUFDO0lBRWQsVUFBVSxDQUFDO1FBQ1AsR0FBRyxHQUFHO1lBQ0YsYUFBYSxFQUFFO2dCQUNYLFlBQVksRUFBRSxVQUFDLElBQUk7b0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQztpQkFDZjthQUNKO1NBQ0osQ0FBQztRQUVGLEdBQUcsR0FBRyxJQUFJLGNBQUssRUFBRSxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxNQUFNLEdBQUc7WUFDVCxJQUFJLEVBQUU7Z0JBQ0YsRUFBRSxFQUFFLE1BQU07Z0JBQ1YsTUFBTSxFQUFFLENBQUM7YUFDWjtZQUNELFNBQVMsRUFBRTtnQkFDUCxFQUFFLEVBQUUsV0FBVztnQkFDZixNQUFNLEVBQUUsR0FBRzthQUNkO1NBQ0osQ0FBQztRQUdGLElBQUksR0FBRyxJQUFJLGdCQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQy9CLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRTtRQUNqQyxLQUFLLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDcEMsTUFBTSxDQUFDO2dCQUNILE1BQU0sRUFBRSxDQUFDO2FBQ1osQ0FBQztTQUNMLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRTtRQUN2QyxHQUFHLENBQUMsTUFBTSxHQUFHO1lBQ1QsSUFBSSxFQUFFO2dCQUNGLE1BQU0sRUFBRSxDQUFDO2FBQ1o7U0FDSixDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFFbEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUIsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLHdCQUF3QixFQUFFO1FBQy9CLEVBQUUsQ0FBQywwREFBMEQsRUFBRTtZQUMzRCxHQUFHLENBQUMsTUFBTSxHQUFHO2dCQUNULElBQUksRUFBRTtvQkFDRixNQUFNLEVBQUUsSUFBSTtpQkFDZjthQUNKLENBQUM7WUFFRixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUVsQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFZixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsNkNBQTZDLEVBQUU7WUFDOUMsR0FBRyxDQUFDLE1BQU0sR0FBRztnQkFDVCxJQUFJLEVBQUU7b0JBQ0YsTUFBTSxFQUFFLENBQUM7aUJBQ1o7YUFDSixDQUFDO1lBRUYsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFFbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFFMUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRWYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0tBQ04sQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLDJCQUEyQixFQUFFO1FBQ2xDLEVBQUUsQ0FBQywwREFBMEQsRUFBRTtZQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUVsQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFZixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsNkNBQTZDLEVBQUU7WUFDOUMsR0FBRyxDQUFDLE1BQU0sR0FBRztnQkFDVCxJQUFJLEVBQUU7b0JBQ0YsRUFBRSxFQUFFLE1BQU07b0JBQ1YsTUFBTSxFQUFFLENBQUM7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFO29CQUNQLEVBQUUsRUFBRSxXQUFXO29CQUNmLE1BQU0sRUFBRSxDQUFDO2lCQUNaO2FBQ0osQ0FBQztZQUVGLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBRWxCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBRTFCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVmLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDLENBQUMsQ0FBQztLQUNOLENBQUMsQ0FBQztDQUNOLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VmdNdXRlfSBmcm9tIFwiLi92Zy1tdXRlXCI7XG5pbXBvcnQge1ZnQVBJfSBmcm9tIFwiLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGlcIjtcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZGVzY3JpYmUoJ011dGUgQnV0dG9uJywgKCkgPT4ge1xuICAgIGxldCBtdXRlOlZnTXV0ZTtcbiAgICBsZXQgcmVmOkVsZW1lbnRSZWY7XG4gICAgbGV0IGFwaTpWZ0FQSTtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICByZWYgPSB7XG4gICAgICAgICAgICBuYXRpdmVFbGVtZW50OiB7XG4gICAgICAgICAgICAgICAgZ2V0QXR0cmlidXRlOiAobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgYXBpID0gbmV3IFZnQVBJKCk7XG4gICAgICAgIGFwaS5tZWRpYXMgPSB7XG4gICAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICAgICAgaWQ6ICdtYWluJyxcbiAgICAgICAgICAgICAgICB2b2x1bWU6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgICAgICBpZDogJ3NlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgdm9sdW1lOiAwLjVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG4gICAgICAgIG11dGUgPSBuZXcgVmdNdXRlKHJlZiwgYXBpKTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgZ2V0IG1lZGlhIGJ5IGlkIG9uIGluaXQnLCAoKSA9PiB7XG4gICAgICAgIHNweU9uKGFwaSwgJ2dldE1lZGlhQnlJZCcpLmFuZC5jYWxsRmFrZSgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZvbHVtZTogMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbXV0ZS52Z0ZvciA9ICd0ZXN0JztcbiAgICAgICAgbXV0ZS5vblBsYXllclJlYWR5KCk7XG5cbiAgICAgICAgZXhwZWN0KGFwaS5nZXRNZWRpYUJ5SWQpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKCd0ZXN0Jyk7XG4gICAgICAgIGV4cGVjdChtdXRlLmN1cnJlbnRWb2x1bWUpLnRvQmUoMSk7XG4gICAgfSk7XG5cbiAgICBpdCgnU2hvdWxkIGdldCB2b2x1bWUgZm9yIG9uZSBtZWRpYSBmaWxlJywgKCkgPT4ge1xuICAgICAgICBhcGkubWVkaWFzID0ge1xuICAgICAgICAgICAgbWFpbjoge1xuICAgICAgICAgICAgICAgIHZvbHVtZTogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIG11dGUudGFyZ2V0ID0gYXBpO1xuXG4gICAgICAgIGxldCB2b2x1bWUgPSBtdXRlLmdldFZvbHVtZSgpO1xuXG4gICAgICAgIGV4cGVjdCh2b2x1bWUpLnRvQmUoMSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnb25DbGljayAoc2luZ2xlIG1lZGlhKScsICgpID0+IHtcbiAgICAgICAgaXQoJ3Nob3VsZCBtdXRlIHZvbHVtZSBpZiBjdXJyZW50IHZvbHVtZSBpcyBkaWZmZXJlbnQgdGhhbiAwJywgKCkgPT4ge1xuICAgICAgICAgICAgYXBpLm1lZGlhcyA9IHtcbiAgICAgICAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZTogMC43NVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG11dGUudGFyZ2V0ID0gYXBpO1xuXG4gICAgICAgICAgICBtdXRlLm9uQ2xpY2soKTtcblxuICAgICAgICAgICAgZXhwZWN0KG11dGUuY3VycmVudFZvbHVtZSkudG9CZSgwLjc1KTtcbiAgICAgICAgICAgIGV4cGVjdChhcGkudm9sdW1lKS50b0VxdWFsKDApO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHVubXV0ZSB2b2x1bWUgaWYgY3VycmVudCB2b2x1bWUgaXMgMCcsICgpID0+IHtcbiAgICAgICAgICAgIGFwaS5tZWRpYXMgPSB7XG4gICAgICAgICAgICAgICAgbWFpbjoge1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWU6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBtdXRlLnRhcmdldCA9IGFwaTtcblxuICAgICAgICAgICAgbXV0ZS5jdXJyZW50Vm9sdW1lID0gMC43NTtcblxuICAgICAgICAgICAgbXV0ZS5vbkNsaWNrKCk7XG5cbiAgICAgICAgICAgIGV4cGVjdChhcGkudm9sdW1lKS50b0VxdWFsKDAuNzUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdvbkNsaWNrIChtdWx0aXBsZSBtZWRpYXMpJywgKCkgPT4ge1xuICAgICAgICBpdCgnc2hvdWxkIG11dGUgdm9sdW1lIGlmIGN1cnJlbnQgdm9sdW1lIGlzIGRpZmZlcmVudCB0aGFuIDAnLCAoKSA9PiB7XG4gICAgICAgICAgICBtdXRlLnRhcmdldCA9IGFwaTtcblxuICAgICAgICAgICAgbXV0ZS5vbkNsaWNrKCk7XG5cbiAgICAgICAgICAgIGV4cGVjdChtdXRlLmN1cnJlbnRWb2x1bWUpLnRvQmUoMSk7XG4gICAgICAgICAgICBleHBlY3QoYXBpLnZvbHVtZSkudG9FcXVhbCgwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCB1bm11dGUgdm9sdW1lIGlmIGN1cnJlbnQgdm9sdW1lIGlzIDAnLCAoKSA9PiB7XG4gICAgICAgICAgICBhcGkubWVkaWFzID0ge1xuICAgICAgICAgICAgICAgIG1haW46IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdtYWluJyxcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICB2b2x1bWU6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBtdXRlLnRhcmdldCA9IGFwaTtcblxuICAgICAgICAgICAgbXV0ZS5jdXJyZW50Vm9sdW1lID0gMC43NTtcblxuICAgICAgICAgICAgbXV0ZS5vbkNsaWNrKCk7XG5cbiAgICAgICAgICAgIGV4cGVjdChhcGkudm9sdW1lKS50b0VxdWFsKDAuNzUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl19