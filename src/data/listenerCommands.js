export const listenerCommands =
    [
        {
            "type": "nc",
            "result": "nc -lvnp {port}"
        },
        {
            "type": "nc freebsd",
            "result": "nc -lvn {port}"
        },
        {
            "type": "busybox nc",
            "result": "busybox nc -lp {port}"
        },
        {
            "type": "ncat",
            "result": "ncat -lvnp {port}"
        },
        {
            "type": "ncat.exe",
            "result": "ncat.exe -lvnp {port}"
        },
        {
            "type": "ncat (TLS)",
            "result": "ncat --ssl -lvnp {port}"
        },
        {
            "type": "rlwrap + nc",
            "result": "rlwrap -cAr nc -lvnp {port}"
        },
        {
            "type": "rustcat",
            "result": "rcat listen {port}"
        },
        {
            "type": "openssl",
            "result": "openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 30 -nodes; openssl s_server -quiet -key key.pem -cert cert.pem -port {port}"
        },
        {
            "type": "pwncat",
            "result": "python3 -m pwncat -lp {port}"
        },
        {
            "type": "pwncat (windows)",
            "result": "python3 -m pwncat -m windows -lp {port}"
        },
        {
            "type": "windows ConPty",
            "result": "stty raw -echo; (stty size; cat) | nc -lvnp {port}"
        },
        {
            "type": "socat",
            "result": "socat -d -d TCP-LISTEN:{port} STDOUT"
        },
        {
            "type": "socat (TTY)",
            "result": "socat -d -d file:`tty`,raw,echo=0 TCP-LISTEN:{port}"
        },
        {
            "type": "powercat",
            "result": "powercat -l -p {port}"
        },
        {
            "type": "msfconsole",
            "result": "msfconsole -q -x \"use multi/handler; set payload {payload}; set lhost {ip}; set lport {port}; exploit\""
        },
        {
            "type": "hoaxshell",
            "result": "python3 -c \"$(curl -s https://raw.githubusercontent.com/t3l3machus/hoaxshell/main/revshells/hoaxshell-listener.py)\" -t {type} -p {port}"
        }
    ]