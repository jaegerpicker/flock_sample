import XMLHttpRequest from 'xmlhttprequest';
import sys from 'sys';
import child_process from 'child_process';
let exec = child_process.exec;
let index = {
  // Replaces #.get(url, data, success, failure)
  get: (url, data, success, failure) => {
    let xhr = new XMLHttpRequest.XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send(data);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === XMLHttpRequest.OK) {
          success(xhr.responseText);
        } else {
          failure(xhr.status);
        }
      }
    };
  },

  // Replaces #.post(url, data, success, failure)
  post: (url, data, success, failure) => {
    let xhr = new XMLHttpRequest.XMLHttpRequest();
    xhr.open('POST', url);
    xhr.send(data);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === XMLHttpRequest.OK) {
          success(xhr.responseText);
        } else {
          failure(xhr.status);
        }
      }
    };
  },

  // Replaces $("#id") but does not support the full range of
  // selectors jQuery supports, launches the html page to show
  // it.
  selector: () => {
    exec('open index.html', (error, stdout, stderr) => {
      sys.print('stdout: ' + stdout);
      sys.print('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
  },
  default: () => {}
};

module.exports = index;
