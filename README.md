Convert from 
```
.heading-h-1-left {      
	font-family: BloggerSans;
	font-size: 64px;
	font-weight: 500;
	line-height: 1.09;
	text-align: left;
	color: #525252;
}

.heading-h-1-left-light {
	font-family: BloggerSans;
	font-size: 64px;
	font-weight: 500;
	line-height: 1.09;
	text-align: left;
	color: #ffffff;
}
``` 
to 

```
export const HeadingH1Left = styled.span`    
	font-family: BloggerSans;
	font-size: 64px;
	font-weight: 500;
	line-height: 1.09;
	text-align: left;
	color: #525252;
`

export const HeadingH1LeftLight = styled.span`
	font-family: BloggerSans;
	font-size: 64px;
	font-weight: 500;
	line-height: 1.09;
	text-align: left;
	color: #ffffff;
`
``` 

         