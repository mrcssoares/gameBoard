package com.example.marcos.gameboardquestion;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import java.io.IOException;
import java.util.Timer;
import java.util.TimerTask;

public class TabuleiroActivity extends AppCompatActivity {
    IPserver server = new IPserver();
    String vez ="";
    String nomeJogador="", nomeSala="", fase="", player="";//jogador

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tabuleiro);

        Intent intent = getIntent();
        nomeJogador = intent.getStringExtra("nomeJogador");
        Log.d("nomeJogador", nomeJogador);
        nomeSala = intent.getStringExtra("nomeSala");
        fase = intent.getStringExtra("fase");
        player = intent.getStringExtra("player");

        final Timer timer = new Timer();

        if(player.contains("1")) {
            timer.scheduleAtFixedRate(new TimerTask() {
                public void run() {
                    verificaVez();
                    if (vez.contains("1")) {
                        Log.d("false", "true");
                        timer.cancel();
                        mostrarResponderPerguntas();

                    }
                }
            }, 1500, 1500);
        }else {
            timer.scheduleAtFixedRate(new TimerTask() {
                public void run() {
                    verificaVez();
                    if (vez.contains("2")) {
                        Log.d("false", "true");
                        timer.cancel();
                        mostrarResponderPerguntas();

                    }
                }
            }, 1500, 1500);
        }

    }

    public void mostrarResponderPerguntas(){
        Intent intent = new Intent(this, ResponderPerguntaActivity.class);
        Log.d("sala2", "chamando tabuleirio");
        intent.putExtra("nomeJogador", nomeJogador);
        intent.putExtra("nomeSala", nomeSala);
        intent.putExtra("fase", fase);
        intent.putExtra("player", player);
        Log.d("nomeJogador", nomeJogador);
        startActivity(intent);
        finish();
    }

    public void verificaVez(){
        Log.d("RespPergunta", "ConsultandoFase");
        new Thread(){
            public void run(){
                try {
                    postHttpVez();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }
    public void postHttpVez() throws IOException {
        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"verificaVez.php");

        final HttpResponse resposta = httpClient.execute(httpPost);
        //mensagem = EntityUtils.toString(resposta.getEntity());
        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    //Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_SHORT).show();
                    vez = EntityUtils.toString(resposta.getEntity());

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }
}
