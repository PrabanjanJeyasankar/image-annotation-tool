function QuoteSvg({width = 20, height = 20}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 100 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M91.683 56.8483C92.1871 61.0493 91.851 64.242 90.6747 66.4265C89.4985 68.611 87.9861 71.0475 86.1377 73.7361C84.4573 74.2402 83.5331 74.7444 83.3651 75.2485C83.197 75.7526 82.861 76.0887 82.3568 76.2567C80.8445 77.2649 79.0801 78.0211 77.0636 78.5252C75.2152 78.8613 73.1988 78.9453 71.0143 78.7773C68.9978 78.6092 67.0654 78.1051 65.217 77.2649C63.3685 76.4247 62.1083 75.3325 61.4361 73.9882C60.5959 74.1562 60.0078 74.1562 59.6717 73.9882C59.3356 73.6521 58.9155 73.4001 58.4114 73.232C58.4114 71.5516 57.5712 70.7114 55.8909 70.7114C56.0589 69.0311 55.8068 68.0228 55.1347 67.6868C54.6306 67.3507 54.2105 66.9306 53.8744 66.4265C54.3785 65.7543 54.4625 65.1662 54.1264 64.6621C53.7904 63.9899 53.7904 63.2337 54.1264 62.3936C53.7904 61.7214 53.3703 61.3013 52.8662 61.1333C52.5301 60.9652 52.194 60.7132 51.8579 60.3771C51.3538 59.2008 51.5219 58.2766 52.362 57.6045C53.2022 56.9323 53.5383 55.9241 53.3703 54.5798C53.0342 54.2437 52.4461 53.9917 51.6059 53.8236C50.9337 53.6556 50.3456 53.4035 49.8415 53.0674C50.1776 52.5633 50.0935 52.0592 49.5894 51.5551C49.2533 51.051 48.9173 50.6309 48.5812 50.2948C48.9173 49.1185 49.2533 48.3624 49.5894 48.0263C49.9255 47.6902 50.0935 47.2701 50.0935 46.766C53.6223 42.7331 56.479 39.2043 58.6635 36.1796C61.016 32.9869 63.6206 29.9622 66.4772 27.1056C68.1576 26.0973 69.67 25.4252 71.0143 25.0891C72.5266 24.753 73.7029 24.0809 74.5431 23.0726C76.7276 22.9046 78.9961 22.4845 81.3486 21.8124C83.8692 20.9722 86.0537 21.3923 87.9021 23.0726C87.9021 23.9128 87.2299 24.585 85.8856 25.0891C84.5413 25.4252 83.6171 25.1731 83.113 24.3329C82.4409 25.5092 81.7687 26.1814 81.0966 26.3494C80.5924 26.5174 80.2564 26.8535 80.0883 27.3576C74.7111 28.5339 70.6782 31.3065 67.9896 35.6755C65.301 40.0445 64.8809 45.0016 66.7293 50.5469C68.0736 51.051 69.2499 50.967 70.2581 50.2948C71.4344 49.4546 72.5266 49.1185 73.5348 49.2866C75.7193 49.7907 77.2317 49.8747 78.0719 49.5386C78.9121 49.2026 79.5002 49.4546 79.8363 50.2948C81.3486 49.9587 82.5249 50.1268 83.3651 50.7989C84.2053 51.4711 85.2135 51.9752 86.3898 52.3113C88.2382 53.4875 89.3304 54.4958 89.6665 55.336C90.1706 56.0081 90.8428 56.5122 91.683 56.8483ZM49.8415 62.3936C50.1776 63.2337 50.1776 64.326 49.8415 65.6703C49.5054 67.0146 48.6652 67.8548 47.3209 68.1909C46.6488 70.3754 46.0606 72.3078 45.5565 73.9882C45.0524 75.5005 44.3802 77.0129 43.5401 78.5252C42.1957 78.8613 41.0195 79.3654 40.0113 80.0376C39.1711 80.7097 38.2469 81.2138 37.2386 81.5499C34.382 82.3901 31.6934 82.054 29.1728 80.5417C26.6522 79.0293 24.4677 77.3489 22.6193 75.5005C19.7627 72.6439 17.1581 69.6192 14.8055 66.4265C12.453 63.0657 10.7726 59.7049 9.7644 56.3442C9.59636 55.8401 9.59636 55.42 9.7644 55.0839C9.93244 54.7478 10.0165 54.2437 10.0165 53.5716C9.00823 52.7314 8.50411 51.9752 8.50411 51.303C8.50411 50.4629 8.33608 49.7907 8 49.2866C9.17627 47.9423 10.1845 46.4299 11.0247 44.7496C11.8649 43.0692 12.7051 41.3888 13.5453 39.7084C14.3854 38.028 15.3097 36.4317 16.3179 34.9193C17.3261 33.407 18.5864 32.1467 20.0987 31.1385C20.4348 29.7942 20.9389 28.87 21.6111 28.3658C22.2832 27.6937 22.8714 26.9375 23.3755 26.0973C25.2239 24.9211 26.9043 23.5768 28.4166 22.0644C29.929 20.5521 31.8614 19.3758 34.2139 18.5356C35.5582 18.3676 36.9866 18.1995 38.4989 18.0315C40.1793 17.8635 41.4396 18.3676 42.2798 19.5438C42.2798 20.384 42.1117 21.1402 41.7757 21.8124C41.4396 22.3165 41.1035 22.9046 40.7674 23.5768C38.4149 23.9128 36.0624 24.501 33.7098 25.3412C31.3573 26.0133 29.7609 27.3576 28.9207 29.3741C28.2486 29.206 27.8285 29.3741 27.6605 29.8782C27.4924 30.3823 27.1563 30.8024 26.6522 31.1385C26.1481 32.4828 25.728 33.9111 25.3919 35.4234C25.0559 36.9358 24.4677 38.1961 23.6275 39.2043C23.7956 40.5486 23.7956 41.8929 23.6275 43.2372C23.6275 44.4135 23.2915 45.5057 22.6193 46.514C23.2915 46.682 23.5435 47.1021 23.3755 47.7742C23.2074 48.2784 23.0394 48.7825 22.8714 49.2866C23.0394 50.1268 23.3755 50.7989 23.8796 51.303C24.5518 51.6391 25.0559 52.1432 25.3919 52.8154C26.7362 51.4711 28.1646 50.7149 29.6769 50.5469C31.3573 50.3788 32.9537 50.1268 34.466 49.7907C36.1464 50.6309 38.3309 51.7231 41.0195 53.0674C43.8761 54.2437 45.8086 55.504 46.8168 56.8483C47.4889 58.5287 48.0771 59.7049 48.5812 60.3771C49.2533 60.8812 49.6734 61.5534 49.8415 62.3936ZM60.932 48.2784C59.9238 47.1021 59.3356 46.682 59.1676 47.0181C58.9996 47.3542 58.5795 47.5222 57.9073 47.5222C58.9155 48.8665 59.5877 49.4546 59.9238 49.2866C60.2598 48.9505 60.5959 48.6144 60.932 48.2784ZM79.3322 54.8318C77.4837 53.9917 75.9714 54.1597 74.7951 55.336C73.7869 56.3442 72.3586 56.8483 70.5102 56.8483C69.1659 57.8565 67.7375 58.7807 66.2252 59.6209C64.7128 60.4611 63.0325 61.3013 61.184 62.1415C61.8562 63.4858 62.2763 64.0739 62.4443 63.9059C62.7804 63.7379 63.2005 63.7379 63.7046 63.9059C64.2087 62.5616 65.1329 61.6374 66.4772 61.1333C67.8216 60.6292 69.4179 60.2931 71.2663 60.125C71.6024 58.7807 72.7787 57.9405 74.7951 57.6045C76.9796 57.1004 78.492 56.1761 79.3322 54.8318ZM86.6418 58.1086C84.9614 57.6045 84.0372 57.5205 83.8692 57.8565C83.7011 58.0246 83.4491 58.1926 83.113 58.3606C81.4326 58.8648 80.0883 59.5369 79.0801 60.3771C78.2399 61.2173 77.3997 61.8054 76.5595 62.1415C76.3915 62.8137 75.7193 63.4018 74.5431 63.9059C73.3668 64.242 72.1065 64.494 70.7622 64.6621C72.4426 66.0064 73.8709 66.1744 75.0472 65.1662C76.3915 64.158 77.5678 63.6538 78.576 63.6538C78.2399 64.326 77.8198 64.8301 77.3157 65.1662C76.8116 65.3342 76.3915 65.6703 76.0554 66.1744C74.8792 65.6703 74.039 65.9224 73.5348 66.9306C73.0307 67.7708 72.1065 68.1909 70.7622 68.1909C68.7458 67.1826 67.5695 67.2667 67.2334 68.4429C67.5695 68.779 67.9056 68.695 68.2416 68.1909C68.7458 67.6868 69.3339 67.5187 70.006 67.6868C69.3339 68.695 68.7458 69.5352 68.2416 70.2073C67.9056 70.8795 67.3174 71.2996 66.4772 71.4676C67.3174 73.4841 68.6617 74.4923 70.5102 74.4923C72.3586 74.4923 74.4591 74.6603 76.8116 74.9964C77.9879 73.9882 79.3322 72.98 80.8445 71.9717C82.5249 70.9635 83.8692 69.7872 84.8774 68.4429C86.0537 67.0986 86.8939 65.5863 87.398 63.9059C87.9021 62.2255 87.65 60.2931 86.6418 58.1086ZM62.6964 55.336C61.184 53.9917 60.0918 53.6556 59.4196 54.3277C58.9155 54.8318 58.2434 55.2519 57.4032 55.588C59.0836 56.5962 60.1758 56.9323 60.6799 56.5962C61.184 56.0921 61.8562 55.672 62.6964 55.336ZM75.2992 59.873C74.6271 59.7049 74.039 59.873 73.5348 60.3771C73.1988 60.7132 72.6106 60.7132 71.7704 60.3771C70.5942 62.2255 68.8298 63.4018 66.4772 63.9059C64.2928 64.41 62.4443 65.3342 60.932 66.6785C63.7886 67.3507 66.1412 66.8466 67.9896 65.1662C69.838 63.4858 71.9385 62.4776 74.291 62.1415L75.2992 59.873ZM64.2087 57.3524C62.6964 57.0163 61.3521 57.3524 60.1758 58.3606C59.1676 59.3689 58.6635 60.2931 58.6635 61.1333C59.6717 60.7972 60.5959 60.2931 61.4361 59.6209C62.4443 58.9488 63.3685 58.1926 64.2087 57.3524ZM18.3343 41.7249C17.6622 41.7249 16.99 42.061 16.3179 42.7331C15.8138 43.4053 15.3937 44.0774 15.0576 44.7496C14.8896 45.4217 14.8896 46.0939 15.0576 46.766C15.3937 47.4382 16.1498 47.7742 17.3261 47.7742C17.6622 46.766 17.9142 45.8418 18.0823 45.0016C18.2503 44.1614 18.3343 43.0692 18.3343 41.7249ZM45.5565 65.9224C45.7245 64.5781 45.4725 63.4858 44.8003 62.6456C44.2962 61.6374 43.8761 60.7132 43.5401 59.873C41.6916 59.2008 40.1793 58.3606 39.003 57.3524C37.9948 56.1761 36.8185 55.1679 35.4742 54.3277C33.9619 54.4958 32.7856 54.6638 31.9454 54.8318C31.1052 54.8318 30.5171 55.0839 30.181 55.588C31.0212 55.7561 31.6934 55.7561 32.1975 55.588C32.7016 55.2519 33.2057 54.9999 33.7098 54.8318C34.0459 57.1844 33.3737 58.7807 31.6934 59.6209C30.013 60.2931 28.7527 61.4693 27.9125 63.1497C29.929 62.8137 31.6093 62.2255 32.9537 61.3853C34.298 60.3771 36.0624 60.041 38.2469 60.3771C39.087 61.3853 39.3391 62.3936 39.003 63.4018C38.835 64.41 38.4149 65.3342 37.7427 66.1744C37.0706 66.8466 36.3144 67.4347 35.4742 67.9388C34.634 68.4429 33.9619 68.863 33.4578 69.1991C33.2897 70.5434 33.0377 71.4676 32.7016 71.9717C32.3655 72.4758 31.9454 72.98 31.4413 73.4841C31.9454 75.5005 32.1975 76.6768 32.1975 77.0129C33.0377 77.0129 33.7938 77.0969 34.466 77.2649C35.3062 77.433 36.2304 77.3489 37.2386 77.0129C37.9108 76.8448 38.751 76.2567 39.7592 75.2485C40.7674 74.2402 41.6916 73.148 42.5318 71.9717C43.372 70.6274 44.0442 69.4512 44.5483 68.4429C45.2204 67.2667 45.5565 66.4265 45.5565 65.9224ZM17.8302 49.2866C16.99 49.1185 16.3179 49.2026 15.8138 49.5386C15.4777 49.8747 15.0576 50.1268 14.5535 50.2948C14.7215 51.135 14.5535 51.8072 14.0494 52.3113C13.7133 52.8154 13.7133 53.4875 14.0494 54.3277C15.3937 52.9834 16.654 51.303 17.8302 49.2866ZM37.2386 63.9059C35.5582 62.8977 34.298 62.7296 33.4578 63.4018C32.6176 63.9059 31.6093 64.326 30.4331 64.6621C28.4166 65.5023 26.9883 66.2584 26.1481 66.9306C25.476 67.6027 24.2997 67.8548 22.6193 67.6868C23.1234 68.863 23.7956 69.8713 24.6358 70.7114C25.476 71.3836 26.0641 72.3918 26.4002 73.7361C29.0888 72.0557 31.1052 70.3754 32.4495 68.695C33.7938 66.8466 35.3902 65.2502 37.2386 63.9059ZM20.0987 55.588C18.9225 55.588 18.1663 55.8401 17.8302 56.3442C17.4942 56.8483 16.906 57.2684 16.0658 57.6045C17.2421 58.7807 18.0823 58.9488 18.5864 58.1086C19.2586 57.2684 19.7627 56.4282 20.0987 55.588ZM25.3919 60.6292C24.5518 60.7972 23.6275 61.1333 22.6193 61.6374C21.6111 62.1415 20.7709 62.7296 20.0987 63.4018C19.5946 63.9059 19.2586 64.494 19.0905 65.1662C19.0905 65.8383 19.7627 66.5105 21.107 67.1826C21.275 65.6703 21.9472 64.5781 23.1234 63.9059C24.4677 63.0657 25.2239 61.9735 25.3919 60.6292ZM85.6336 62.1415C85.6336 63.1497 85.2975 63.8219 84.6254 64.158C84.1212 64.494 83.7011 65.0822 83.3651 65.9224C81.3486 66.7625 80.3404 66.8466 80.3404 66.1744C81.3486 64.6621 82.1888 63.6538 82.861 63.1497C83.7011 62.6456 84.2053 61.8894 84.3733 60.8812L85.6336 62.1415ZM82.1048 63.4018C80.5924 63.9059 79.6682 63.9899 79.3322 63.6538C80.3404 63.1497 81.0966 62.8977 81.6007 62.8977C82.1048 62.7296 82.2728 62.2255 82.1048 61.3853V63.4018ZM80.0883 67.4347C80.4244 68.2749 80.1723 69.0311 79.3322 69.7032C78.66 70.2073 78.1559 70.7955 77.8198 71.4676C78.3239 70.2913 78.576 69.4512 78.576 68.947C78.744 68.4429 78.66 68.0228 78.3239 67.6868L80.0883 67.4347Z'
                fill="var(--color-primary-violet)"
            />
        </svg>
    )
}

export default QuoteSvg
