---
layout: simple
titles:
  en: Temp
  zh: 临时
  zh-Hans: 临时
  zh-Hant: 临时
key: page-temp
---

``` mermaid
graph TD;
    image[image</br>32*208*208*3]         --> conv1[convolutional</br>3*3*3*16];
    conv1[convolutional</br>3*3*3*16]     -->|relu| pool1[max pooling</br>3*3,2*2];
    pool1[max pooling</br>3*3,2*2]        --> conv2[convolutional</br>3*3*16*16];
    conv2[convolutional</br>3*3*16*16]    -->|relu| pool2[max pooling</br>3*3,1*1];
    pool2[max pooling</br>3*3,1*1]        --> fcon1[fully connected</br>173056*128];
    fcon1[fully connected</br>173056*128] -->|relu| fcon2[fully connected</br>128*128];
    fcon2[fully connected</br>128*128]    -->|relu| fcon3[fully connected</br>128*2];
    fcon3[fully connected</br>128*2]      --> softmax;
```