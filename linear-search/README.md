# Linear search

## Ý tưởng

```
Duyệt tuần tự từng phần tử trong danh sách và trả về khi tìm thấy giá trị cần tìm
```

## Psuedo

```
function (list, key) {
	for (i = 0 -> n) {
		if (list[i] == key) {
			return i;
		}
	}
}
```

## Độ phức tạp của Tìm kiếm Tuyến tính

| Case | Time complexity |
| --------- | ------------|
| Best case | O (1) |
| Average case | O (n) |
| Worst case | O (n) |