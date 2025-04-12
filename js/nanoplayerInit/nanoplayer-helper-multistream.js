/* eslint-disable no-undef, no-console, no-unused-vars */
// onGetStreamsError = function (request) {
//     console.log('no stream was found');
// };
//
// getStreamFromResponse = function (response) {
//     var id = response.id;
//     var h5live = response.playout.h5live[0];
//     var url = h5live.rtmp.url;
//     var streamName = h5live.rtmp.streamname;
//     var server = h5live.server;
//
//     var group, bitrate = 'NaN';
//
//     var tags = response.tags;
//     if (tags && tags.push) {
//         var i, len = tags.length;
//         for (i = 0; i < len; i += 1) {
//             if (tags[i].indexOf('group') !== -1) {
//                 group = tags[i];
//                 group = group.replace(/ /g, '').replace('group:', '');
//             }
//
//             if (tags[i].indexOf('bitrate') !== -1) {
//                 bitrate = tags[i];
//                 bitrate = bitrate.replace(/ /g, '').replace('bitrate:', '');
//             }
//         }
//     }
//
//     if (!!id & !!url & !!streamName & !!group & !!bitrate) {
//         return {
//             'id'         : id,
//             'url'        : url,
//             'streamname' : streamName,
//             'group'      : group,
//             'bitrate'    : bitrate,
//             'server'     : server
//         };
//     }
//
//     return {};
// };
