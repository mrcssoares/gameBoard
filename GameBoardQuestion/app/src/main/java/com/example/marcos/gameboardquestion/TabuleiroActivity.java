package com.example.marcos.gameboardquestion;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

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
    String[] posicoes = new String[100];
    String respostas="";
    TextView faseJogador1, faseJogador2;
    String flag="";
    Button[] button1 = new Button[12];
    Button[] button2 = new Button[12];
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tabuleiro);
        faseJogador1 = (TextView)findViewById(R.id.textView_fase_jogador1);
        faseJogador2 = (TextView)findViewById(R.id.textView_fase_jogador2);
        
        button1[0] = (Button) findViewById(R.id.button_1_0);
        button2[0] = (Button) findViewById(R.id.button_2_0);
        button1[1] = (Button) findViewById(R.id.button_1_1);
        button2[1] = (Button) findViewById(R.id.button_2_1);
        button1[2] = (Button) findViewById(R.id.button_1_2);
        button2[2] = (Button) findViewById(R.id.button_2_2);
        button1[3] = (Button) findViewById(R.id.button_1_3);
        button2[3] = (Button) findViewById(R.id.button_2_3);
        button1[4] = (Button) findViewById(R.id.button_1_4);
        button2[4] = (Button) findViewById(R.id.button_2_4);
        button1[5] = (Button) findViewById(R.id.button_1_5);
        button2[5] = (Button) findViewById(R.id.button_2_5);
        button1[6] = (Button) findViewById(R.id.button_1_6);
        button2[6] = (Button) findViewById(R.id.button_2_6);
        button1[7] = (Button) findViewById(R.id.button_1_7);
        button2[7] = (Button) findViewById(R.id.button_2_7);
        button1[8] = (Button) findViewById(R.id.button_1_8);
        button2[8] = (Button) findViewById(R.id.button_2_8);
        button1[9] = (Button) findViewById(R.id.button_1_9);
        button2[9] = (Button) findViewById(R.id.button_2_9);
        button1[10] = (Button) findViewById(R.id.button_1_10);
        button2[10] = (Button) findViewById(R.id.button_2_10);
        button1[11] = (Button) findViewById(R.id.button_1_11);
        button2[11] = (Button) findViewById(R.id.button_2_11);
        button1[0].setVisibility(View.INVISIBLE);
        button2[0].setVisibility(View.INVISIBLE);
        button1[1].setVisibility(View.INVISIBLE);
        button2[1].setVisibility(View.INVISIBLE);
        button1[2].setVisibility(View.INVISIBLE);
        button2[2].setVisibility(View.INVISIBLE);
        button1[3].setVisibility(View.INVISIBLE);
        button2[3].setVisibility(View.INVISIBLE);
        button1[4].setVisibility(View.INVISIBLE);
        button2[4].setVisibility(View.INVISIBLE);
        button1[5].setVisibility(View.INVISIBLE);
        button2[5].setVisibility(View.INVISIBLE);
        button1[6].setVisibility(View.INVISIBLE);
        button2[6].setVisibility(View.INVISIBLE);
        button1[7].setVisibility(View.INVISIBLE);
        button2[7].setVisibility(View.INVISIBLE);
        button1[8].setVisibility(View.INVISIBLE);
        button2[8].setVisibility(View.INVISIBLE);
        button1[9].setVisibility(View.INVISIBLE);
        button2[9].setVisibility(View.INVISIBLE);
        button1[10].setVisibility(View.INVISIBLE);
        button2[10].setVisibility(View.INVISIBLE);
        button1[11].setVisibility(View.INVISIBLE);
        button2[11].setVisibility(View.INVISIBLE);
        
        Intent intent = getIntent();
        nomeJogador = intent.getStringExtra("nomeJogador");
        Log.d("nomeJogador", nomeJogador);

        nomeSala = intent.getStringExtra("nomeSala");
        fase = intent.getStringExtra("fase");
        player = intent.getStringExtra("player");
        Log.d("player", player);
        verificaPosicoes();
        final Timer timer = new Timer();


        if(player.contains("1")) {
        //    Log.d("fase1: ",faseJogador1.getText().toString() );
                timer.scheduleAtFixedRate(new TimerTask() {
                    public void run() {
                        verificaVez();
                        verificaPosicoes();
                        if(flag.toString().equals("true")){
                            timer.cancel();
                            finish();
                        }else {
                            if (vez.contains("1")) {
                                Log.d("false", "true");
                                timer.cancel();
                                mostrarResponderPerguntas();
                            }
                        }
                    }
                }, 1500, 1500);
        }else {
        //    Log.d("fase2: ",faseJogador1.getText().toString() );
                timer.scheduleAtFixedRate(new TimerTask() {
                    public void run() {
                        verificaVez();
                        verificaPosicoes();
                        if(flag.toString().equals("true")){
                            timer.cancel();
                            finish();
                        }else {
                            if (vez.contains("2")) {
                                Log.d("false", "true");
                                timer.cancel();
                                mostrarResponderPerguntas();

                            }
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

    public void verificaPosicoes(){
        Log.d("RespPergunta", "ConsultandoFase");
        new Thread(){
            public void run(){
                try {
                    postHttpP();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }
    public void postHttpP() throws IOException {
        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"verificaposicoes.php");

        final HttpResponse resposta = httpClient.execute(httpPost);
        //mensagem = EntityUtils.toString(resposta.getEntity());
        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    //Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_SHORT).show();
                    respostas = EntityUtils.toString(resposta.getEntity());
                    posicoes = respostas.split(";");
                    faseJogador1.setText("Jogador1: "+posicoes[0]);
                    faseJogador2.setText("Jogador2: "+posicoes[1]);
                    int um = Integer.parseInt(posicoes[0].toString());
                    int dois = Integer.parseInt(posicoes[1].toString());
                    button1[um].setVisibility(View.VISIBLE);
                    button2[dois].setVisibility(View.VISIBLE);
                    if(um > 0 && dois > 0) {
                        button1[um - 1].setVisibility(View.INVISIBLE);
                        button2[dois - 1].setVisibility(View.INVISIBLE);
                    }

                    if(posicoes[0].toString().equals("11") && player.equals("2")){
                        flag = "true";
                        Toast.makeText(getBaseContext(), "Você Perdeu!!", Toast.LENGTH_LONG).show();
                    }
                    if(posicoes[1].toString().equals("11") && player.equals("2")){
                        flag = "true";
                        Toast.makeText(getBaseContext(), "Você Venceu!!", Toast.LENGTH_LONG).show();
                    }
                    if(posicoes[0].toString().equals("11") && player.equals("1")){
                        flag = "true";
                        Toast.makeText(getBaseContext(), "Você Venceu!!", Toast.LENGTH_LONG).show();
                    }
                    if(posicoes[1].toString().equals("11")&& player.equals("1")){
                        flag = "true";
                        Toast.makeText(getBaseContext(), "Você Perdeu!!", Toast.LENGTH_LONG).show();
                    }

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }
}
